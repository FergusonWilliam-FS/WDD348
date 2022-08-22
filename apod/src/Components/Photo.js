import React from "react";
import "./Photo.css";


const Photo = props => (
    <div>
      <h3 className="m-5 text-center">{props.photo.title}</h3>
      {/* Scan the API for media_type and if it's an image, render or else display a YouTube video in <iframe> */}
      {props.photo.media_type === "image" ? (
      <img className="rounded mx-auto d-block" src={props.photo.url} alt={props.photo.title} />
      ) : (
          <iframe
            title="space-video"
            src={props.photo.url}
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className="rounded mx-auto d-block embed-responsive embed-responsive-16by9"
            />        
        )}
      <p className="col-md-8 offset-md-2 mt-5 pb-5">{props.photo.explanation}</p>
    </div>
  
);
  
export default Photo;