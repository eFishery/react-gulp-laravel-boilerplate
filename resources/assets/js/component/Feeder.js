import React, { PropTypes } from 'react'
import { Panel } from 'react-bootstrap'

import FieldGroup from './FieldGroup'

class Feeder extends React.Component {
  componentDidMount() {
    console.log("Component Feeder did mount!");
  }

  render() {
    const { feederState, onFeederChange } = this.props;

    return (
      <Panel className="panel-feeder full-height" >
        <FieldGroup
            id={feederState[0].id}
            type="number"
            label="Text"
            refname="feederEntry"
            placeholder="Enter text"
            num={feederState[0].num}
            onFeederChange={onFeederChange}
          />
      </Panel>
    )
  }
}

Feeder.propTypes = {
  onFeederChange: PropTypes.func.isRequired,
  feederState: PropTypes.array.isRequired,
}

export default Feeder