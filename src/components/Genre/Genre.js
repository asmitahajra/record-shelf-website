/* eslint-disable react/prop-types */
import './Genre.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
// import { Link } from 'react-router-dom';

const Genre = ({ groupedSongs, onIncrement }) => (
  <div className="genre">
    <div className="genre-header">
      <div className="genre-text">
        <h1>genres</h1>
      </div>
      <Link to="/home"><img data-testid="card-img" src="../assets/icon-grid.svg" alt="grid-button" className="genre-image" /></Link>
    </div>
    <div className="cards">
      {Object.keys(groupedSongs).map((genre) => (
        <div key={genre}>
          <div className="genre-head">
            <img data-testid="genre-img" src={`../assets/genre-${genre}.png`} alt="grid-button" className="genre-logo" />
            <div className="genre-heading"><h1>{genre}</h1></div>
          </div>
          <div className="row">
            {groupedSongs[genre].map((song) => (
              <Card
                key={song.id}
                eachSong={song}
                onIncrement={() => onIncrement(song.id)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
//   const { nameSong, albumArtUrl, artist } = eachSong;
//   return (
//     <div className="card">
//       <img data-testid="card-img" src={albumArtUrl} alt={nameSong} className="image" />
//       {nameSong}
//       <br />
//       {artist}
//     </div>
//   );
);

export default Genre;
