import React, { Component } from "react";
import Header from "./Components/Header";
import DateInput from "./Components/Date";
import Photo from "./Components/Photo";

class App extends Component {
  state = {
    date: "",
    photo: ""
  };

  changeDate = e => {
    e.preventDefault();
    let dateFromInput = e.target[0].value;
    this.setState({ date: dateFromInput });
    this.getPhoto(dateFromInput);
  };

  getPhoto = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=EbInQmEzXObNwCxF9gY8llrfdKuoLkH2ZWwOjS2G`)
      .then(response => response.json())
      .then(photoData => this.setState({ photo: photoData }));
  };

  render() {
    return (
      <div>
        <Header />
        <DateInput changeDate={this.changeDate} />
        <Photo photo={this.state.photo} />
      </div>
    );
  }
}

export default App;