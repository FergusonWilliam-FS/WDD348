import React from "react";
import "./Photo.css";

const Photo = props => (
    <div>
      <h3 class="m-5 text-center">{props.photo.title}</h3>
      <img class="rounded mx-auto d-block" src={props.photo.url} alt={props.photo.title} />
      <p class="col-md-8 offset-md-2 mt-5 pb-5">{props.photo.explanation}</p>
    </div>
  );
  
export default Photo;