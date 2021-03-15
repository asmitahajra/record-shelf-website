/* eslint-disable react/prop-types */
import './Card.scss';
import React from 'react';
// import { Link } from 'react-router-dom';

const Card = ({ eachSong, onIncrement }) => {
  const {
    nameSong, albumArtUrl, artist, count, like,
  } = eachSong;
  let heart;
  if (like === true) {
    heart = '../assets/heart-red.svg';
  } else {
    heart = '../assets/heart-gray.svg';
  }
  return (
    <div className="card">
      <img data-testid="card-img" src={albumArtUrl} alt={nameSong} className="image" />
      {nameSong}
      <br />
      {artist}
      <button type="button" onClick={onIncrement}><img data-testid="card-img" src={heart} alt="like-button" className="like" /></button>
      {count}
    </div>
  );
};

export default Card;
