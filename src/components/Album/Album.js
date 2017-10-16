import React from 'react';
import propTypes from 'prop-types';
import './Album.css';

const Album = props => (
  
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="article">
            <h2>{props.album}</h2>
            <img src={props.imageUrl} alt={props.alt} />
            <p>Release date: {props.releaseDate}</p>
            <p>Genre: {props.genre}</p>
            <a href={props.link} target="blanket"><button className="btn btn-info">Watch</button></a>
        </div>
      </div>
);

Album.propTypes = {
  album: propTypes.string.isRequired,
  imageUrl: propTypes.string.isRequired,
  releaseDate: propTypes.string.isRequired,
  genre: propTypes.string.isRequired
};

export default Album;
