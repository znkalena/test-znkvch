import React from "react";

class SelectInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ selectedOption: event.target.value });
  }

  render() {
    return (
      <div >
        <label className="this.props.className" htmlFor="selectInput">{this.props.label}:</label>
        <select id="selectInput" value={this.state.selectedOption} onChange={this.handleChange}>
          <option value="">{this.props.content}</option>
          <option value={this.props.option1}>{this.props.option1}</option>
          <option value="option2">{this.props.option2}</option>
          <option value="option3">{this.props.option3}</option>
        </select>        
      </div>
    );
  }
}
export default SelectInput