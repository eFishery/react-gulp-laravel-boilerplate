import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Col, Row, Panel, FormGroup, Checkbox, Radio, ControlLabel, HelpBlock, FormControl, Button } from 'react-bootstrap'

class FieldGroup extends React.Component {
  componentDidMount() {
    console.log("Component FieldGroup did mount!");
  }

  render() {
    const {id, label, placeholder, onFeederChange, num, ...newProps} = this.props;
    let {refname, ...formProps } = newProps;

    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl ref={ref => refname = ref}
          onChange={() => onFeederChange(id, ReactDOM.findDOMNode(refname).value)}
          defaultValue={num}
          {...formProps} />
        {placeholder && <HelpBlock>{placeholder}</HelpBlock>}
      </FormGroup>
    )
  }
}

FieldGroup.propTypes = {
  onFeederChange: PropTypes.func.isRequired,
  num: PropTypes.number.isRequired,
}

export default FieldGroup