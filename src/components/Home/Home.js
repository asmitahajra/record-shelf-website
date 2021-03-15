/* eslint-disable react/prop-types */
import './Home.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
// import { Link } from 'react-router-dom';

const Home = ({ songInventory, onIncrement }) =>
  // const abc = JSON.stringify(songInventory);
  (
    <div className="home">
      <div className="all-songs-header">
        <div className="all-songs">
          <h1>all songs</h1>
        </div>
        <Link to="/genre"><img data-testid="card-img" src="../assets/icon-genre.svg" alt="grid-button" className="image-genre" /></Link>
      </div>
      <div className="cards">
        {/* {abc} */}
        {songInventory.map((eachSong) => (
          <Card
            key={eachSong.id}
            eachSong={eachSong}
            onIncrement={() => onIncrement(eachSong.id)}
          />
        ))}
      </div>
    </div>
  );
export default Home;
