import express                   from 'express';
import React                     from 'react';
import { renderToString }        from 'react-dom/server'
import { RoutingContext, match } from 'react-router';
import createLocation            from 'history/lib/createLocation';
import routes                    from 'routes';
import { Provider }              from 'react-redux';
import * as reducers             from 'reducers';
import promiseMiddleware         from './lib/promiseMiddleware';
import fetchComponentData        from './lib/fetchComponentData';
import { createStore, combineReducers, applyMiddleware }       from 'redux';
import path                      from 'path';
import request                   from 'sync-request';
import {laravelPort}               from './config';
const app = express();


// dist/bundle.js
app.use(express.static(path.join(__dirname, './../dist')));

app.use( (req, res) => {
  console.log('========================\nRequest to :'+req.url);

  const location = createLocation(req.url);
  const reducer  = combineReducers(reducers);
  const store    = applyMiddleware(promiseMiddleware)(createStore)(reducer);

  match({ routes, location }, (err, redirectLocation, renderProps) => {
    if(err) {
      console.error(err);
      return res.status(500).end('Internal server error');
    }

    if(!renderProps){
      // send request to compare back-end server api routes
      var r = request(req.method, `http://${req.hostname}:${laravelPort}${req.url}`);
      return res.status(r.statusCode).end(r.getBody());
    }


    function renderView() {
      const InitialView = (
        <Provider store={store}>
          <RoutingContext {...renderProps} />
        </Provider>
      );

      const componentHTML = renderToString(InitialView);

      const initialState = store.getState();

      // base HTML
      const HTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
            <title>Redux Demo</title>
            <link rel="stylesheet" href="/bundle.css" media="screen" charset="utf-8">
            <script>
              window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
            </script>
          </head>
          <body>
            <div id="react-view">${componentHTML}</div>
            <script type="application/javascript" src="/bundle.js"></script>
          </body>
        </html>
        `;

        return HTML;
      }

      fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
      .then(renderView)
      .then(html => res.end(html))
      .catch(err => res.end(err.message));
    });
  });
  export default app;
