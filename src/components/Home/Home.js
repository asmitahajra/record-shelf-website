/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import './Home.scss';
import React from 'react';
import Card from '../Card/Card';
// import { Link } from 'react-router-dom';

const Home = ({ songInventory }) =>
  // const abc = JSON.stringify(songInventory);
  (
    <>
      <img data-testid="card-img" src="../assets/icon-grid.svg" alt="grid-button" className="image" />
      <div>
        {/* {abc} */}
        {songInventory.map((eachSong) => (
          <Card key={eachSong.id} eachSong={eachSong} />
        ))}
      </div>
    </>
  );
export default Home;
