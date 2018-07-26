import React from 'react'
import WeatherBox from './WeatherBox'



const WeatherListBox = (props) => {
  // let postRev = props.list.reverse()

  return <div className="city-list">
    {props.list.map((item, index) =>
      // {postRev.map((item, index) =>
      <WeatherBox
        item={item}
        key={index}
        index={index}
        deletePost={props.handleDeletePost}
        addComment={props.handleAddComment}
        deleteComment={props.handleDeleteComment}
      />)}
  </div>
}

export default WeatherListBox