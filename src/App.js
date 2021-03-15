// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import apiUtil from './utils/api';

const App = () => {
  // const history = useHistory();
  const [songInventory, setSongInventory] = useState([]);
  // const [songLikeInventory, setSongLikeInventory] = useState([]);

  const getSongObjects = (items) => items.map(async (item) => {
    const songLikesObject = await apiUtil.getSongLikes(item.id);
    console.log(item.id);
    console.log(songLikesObject);
    console.log(songLikesObject.count);
    const newSong = {
      ...item,
      id: item.id,
      nameSong: item.name,
      ...item.genre,
      genre: item.genre.name,
      ...item.artist,
      artist: item.artist.name,
      count: songLikesObject.count,
    };
    return newSong;
  }, []);

  const getInventory = async (song) => {
    const songObjects = await Promise.all(getSongObjects(song));
    // console.log({ songObjects });
    setSongInventory(songObjects);
  };

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/home">
            <Home songInventory={songInventory} />
          </Route>
          <Route path="/" exact>
            <LandingPage getInventory={getInventory} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
