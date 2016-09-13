import React, { PropTypes } from 'react'
import { Col, Row, Panel } from 'react-bootstrap'

class Data extends React.Component {
  componentDidMount() {
    console.log("Component Data did mount!");
  }

  render() {
    return (
      <Panel className="panel-data full-height" >
        Data Column
      </Panel>
    )
  }
}

Data.propTypes = {
  
}

export default Data