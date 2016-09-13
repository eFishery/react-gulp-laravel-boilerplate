import React from 'react'
import OrderContainer from './OrderContainer'

class App extends React.Component {
  componentWillMount() {
    console.log("Component App will mount!");
  }

  render() {
    return (
      <OrderContainer />  
    )
  }
}

export default App