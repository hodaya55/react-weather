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
        <div className="input-group">
          <input
            className="form-control"
            placeholder="add comment..."
            onChange={this.handleChange}
            required
            value={this.state.commentText} />
          <span className="input-group-btn">
            <button
              className="btn btn-danger " type="submit">Send</button>
          </span>
        </div>
      </form>
    )
  }
}
