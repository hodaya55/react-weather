import React, { Component } from 'react'

export default class CommentForm extends Component {
  constructor() {
    super();
    this.state = { commentText: '' };
  }
  handleChange = ({ target: { value } }) => {
    this.setState({ commentText: value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addComment(this.props.indexPost, this.state.commentText);
    this.setState({ commentText: '' });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="add comment..." onChange={this.handleChange} required value={this.state.commentText} />
        <button className="btn btn-default" type="submit">Send</button>
      </form>
    )
  }
}
