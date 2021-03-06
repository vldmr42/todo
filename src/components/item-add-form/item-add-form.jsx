import React, { Component } from "react";

import "./item-add-form.css";

export default class ItemAddForm extends Component {
  state = {
    label: "",
  };
  onLabelChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: "",
    });
  };
  render() {
    return (
      <form className="item-add-form" onSubmit={this.onSubmit}>
        <input
          className="form-control"
          type="text"
          onChange={this.onLabelChange}
          placeholder="What needs to be done"
          value={this.state.label}
        ></input>
        <button className="btn btn-outline-secondary">Add Item</button>
      </form>
    );
  }
}
