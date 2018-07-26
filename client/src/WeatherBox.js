import React from 'react'
import CommentsListBox from './CommentsListBox';
import CommentForm from './CommentForm';

export default (props) => {
  const handleDeletePost = () => {
    props.deletePost(props.index);
  };

  return (
    <div className="city-post">
      <div>
        <span onClick={handleDeletePost}
          className="glyphicon glyphicon-trash pull-right"></span>
        <div className="media-left">
          <img src={`https://openweathermap.org/img/w/${props.item.icon}.png`} alt="icon-weather" className="media-object" style={{ width: 60 }} />
        </div>
        <div className="media-body">
          <h3>{props.item.cityName}</h3>
          <h4>
            {props.item.tCelsius} | {props.item.tFahrenheit} -{props.item.description}
          </h4>
        </div>
      </div>

      <CommentForm indexPost={props.index} addComment={props.addComment} />
      <CommentsListBox comments={props.item.comments} deleteComment={props.deleteComment} indexPost={props.index} />
      <hr />
    </div >
  )
}
