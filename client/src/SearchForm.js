import React, { Component } from 'react'
import axios from 'axios'

export default class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      city: ''
    }
  }
  handleInputChange = ({ target: { value } }) => {
    this.setState({ city: value });
  }
  handleSubmit = (e) => {
    e.preventDefault();

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=d703871f861842b79c60988ccf3b17ec`;

    //Calling axios with a get request and pass the url
    //Use the response here to update
    axios.get(url)
      .then(response => {
        let structure = {
          cityName: this.state.city,
          tCelsius: Math.round(response.data.main.temp) + " °C ",
          tFahrenheit: Math.round(response.data.main.temp * 1.8 + 32) + " °F ",
          icon: response.data.weather[0].icon,
          description: response.data.weather[0].description,
          comments: []
        };
        console.log(structure);

        this.props.updateData(structure);
        this.setState({ city: '' });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
  render() {
    return (
      <form action="#" id="getWeatherForm" onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input
            className="form-control"
            id="city"
            placeholder="Enter city"
            required
            value={this.state.city}
            onChange={this.handleInputChange} />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Go!</button>
          </span>
        </div>
      </form>
    )
  }
}
