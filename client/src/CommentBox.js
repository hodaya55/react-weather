import React from 'react'

const CommentBox = (props) => {
  const handleDeleteComment = () => {
    props.deleteComment(props.indexPost, props.indexComment);
  };

  return (
    <div>
      <span
        onClick={handleDeleteComment}
        className="glyphicon glyphicon-trash pull-right"></span>
      <p>{props.commentText}</p>
    </div>
  )
}

export default CommentBox
