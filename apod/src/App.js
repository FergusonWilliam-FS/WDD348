import React, { Component } from "react";
import Header from "./Components/Header";
import Photo from "./Components/Photo";
import MyNavBar from "./Components/MyNavbar";
import { Outlet, Link } from "react-router-dom";
import DateForm from "./Components/DateForm";


class App extends Component {
  state = {
    date: "",
    photo: ""
  };

  makeDateString = (d)=>{
    let dString = d.getFullYear() + "-"
    dString +=  ('0' + (d.getMonth() + 1)).slice(-2) + "-"
    dString += ('0' + d.getDate()).slice(-2);
    return dString;
  }

  componentDidMount = ()=>{
    this.changeDate(this.makeDateString(new Date()))
  }

  changeDate = val => {
    this.setState({ date: val });
    this.getPhoto(val);
  };

 

  getPhoto = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=zsxaucLDeTrOFprbfAAVGSNjUoc5n9Rg84R5aFVI`)
      .then(response => response.json())
      .then(photoData => this.setState({ photo: photoData }));
  };

  render() {
    return (
      <div>
        <Header />
        <MyNavBar />

        <DateForm dateChange={this.changeDate} />
        <Photo photo={this.state.photo} />
        <Link to="/Help">Help</Link> |{" "}
        <Link to="/About">About</Link>
        <Outlet />
      </div>
    );
  }
}

export default App;