var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      text: ''
    }
  },
  render: function() {
    return <div className="input-group">
      <input
        value={this.state.text}
        onChange={this.handleInputChange}
        type="text"
        className="form-control" />
      <input
      type="date"
      value = {this.state.date}
      className="form-control"
      />
      <span className="input-group-btn">
        <button
          onClick={this.handleClick}
          className="btn btn-default"
          type="button">
          Add Task
        </button>
      </span>
    </div>
  },
  handleClick: function() {
    this.props.itemsStore.push({
        text: this.state.text,
        done: false,
        date: this.state.date
    });

    this.setState({text: ''});
  },
  handleInputChange: function(event) {
    this.setState({
      text: event.target.value
    });
  }
});
