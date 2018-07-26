import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import WeatherListBox from './WeatherListBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      weatherList: []
    }
  }
  updateData = (data) => {
    this.setState(prevState => ({ weatherList: prevState.weatherList.concat(data) }));
  }
  handleDeletePost = (index) => {
    this.setState({
      weatherList:
        this.state.weatherList.filter((post, i) => i !== index)
    });
  }
  handleAddComment = (index, comment) => {
    let list = this.state.weatherList.concat();
    list[index].comments.push(comment);
    this.setState({ weatherList: list });
  }
  handleDeleteComment = (indexPost, indexComment) => {
    this.setState({
      weatherList:
        // let list =
        this.state.weatherList.map((post, i) => {
          if (i === indexPost) {
            // this return all the comments except the one we want to delete
            let commentArr = post.comments.filter((comment, indexC) => indexC !== indexComment);
            post.comments = commentArr;
          }

          return post;
        })
    });
    // this.setState({ weatherList: list });
  }
  render() {
    return (
      <div className="row" >
        <div className="col-md-6 col-md-offset-3">
          <div className="page-header">
            <h2>Weather</h2>
            <SearchForm updateData={this.updateData} />
          </div>
          <WeatherListBox
            handleAddComment={this.handleAddComment}
            handleDeleteComment={this.handleDeleteComment}
            handleDeletePost={this.handleDeletePost}
            list={this.state.weatherList} />
        </div>
      </div>
    );
  }
}

export default App;
