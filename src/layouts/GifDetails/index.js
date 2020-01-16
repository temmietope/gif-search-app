import React from "react";
import "./GifDetails.css";
import { Link } from "react-router-dom";

const GifDetails = props => {
  const gif = props.location.state;
  const keys = ["embed_url", "title", "username", "rating"];

  return (
    <div className="gif-details">
      <h3>{gif.title}</h3>
      <img src={gif.images.original.url} alt={gif.images.title} />
      <div className="detail">
        {Object.keys(gif).map((key, index) => {
          if (keys.includes(key)) {
            return (
              <p key={index}>
                <span>{key}</span>: {gif[key]}
              </p>
            );
          }
        })}
        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
};

export default GifDetails;
