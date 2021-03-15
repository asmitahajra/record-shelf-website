/* eslint-disable react/prop-types */
import './Card.scss';
import React from 'react';
// import { Link } from 'react-router-dom';

const Card = ({ eachSong }) => {
  const { nameSong, albumArtUrl, artist } = eachSong;
  return (
    <div className="card">
      <img data-testid="card-img" src={albumArtUrl} alt={nameSong} className="image" />
      {nameSong}
      <br />
      {artist}
    </div>
  );
};

export default Card;
