/* eslint-disable react/prop-types */
import './Genre.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
// import { Link } from 'react-router-dom';

const Genre = ({ groupedSongs }) => (
  <div>
    <Link to="/home"><img data-testid="card-img" src="../assets/icon-grid.svg" alt="grid-button" className="image" /></Link>
    {Object.keys(groupedSongs).map((genre) => (
      <div key={genre} className="row">
        <h1>{genre}</h1>
        <div className="products">
          {groupedSongs[genre].map((song) => (
            <Card
              key={song.id}
              eachSong={song}
            />
          ))}
        </div>
      </div>
    ))}
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
