/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import './Home.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
// import { Link } from 'react-router-dom';

const Home = ({ songInventory, onIncrement }) =>
  // const abc = JSON.stringify(songInventory);
  (
    <>
      <Link to="/genre"><img data-testid="card-img" src="../assets/icon-genre.svg" alt="grid-button" className="image" /></Link>
      <div>
        {/* {abc} */}
        {songInventory.map((eachSong) => (
          <Card key={eachSong.id} eachSong={eachSong} onIncrement={() => onIncrement(eachSong.id)} />
        ))}
      </div>
    </>
  );
export default Home;
