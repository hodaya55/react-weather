import React, { Component } from 'react'
import CommentBox from './CommentBox'

export class CommentsListBox extends Component {
  render() {
    return (
      <div className="comments-list">
        {this.props.comments.map((comment, i) =>
          <CommentBox
            commentText={comment}
            key={i}
            indexPost={this.props.indexPost}
            indexComment={i}
            deleteComment={this.props.deleteComment} />
        )}
      </div>
    )
  }
}

export default CommentsListBox
