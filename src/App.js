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
import Genre from './components/Genre/Genre';
import apiUtil from './utils/api';

const App = () => {
  // const history = useHistory();
  const [songInventory, setSongInventory] = useState([]);
  const [groupedSongs, setGroupedSongs] = useState([]);
  // const [songLikeInventory, setSongLikeInventory] = useState([]);

  const onIncrement = async (id) => {
    const songGet = songInventory.find((song) => song.id === id);
    const likedOrNot = !songGet.like;
    console.log(id);
    console.log(likedOrNot);
    const songLiked = await apiUtil.updateSongLikes(id, likedOrNot);
    console.log(songLiked);

    const newSongInventory = songInventory.map((eachSong) => (eachSong.id === id ? {
      ...eachSong, like: songLiked.like, count: songLiked.count,
    } : eachSong));
    setSongInventory(newSongInventory);
  };

  const groupByGenre = (songs) => songs.reduce((acc, eachSong) => {
    const newSong = {
      ...eachSong,
    };
    const { genre } = newSong;
    if (!acc[genre]) {
      acc[genre] = [];
    }
    acc[genre].push(newSong);
    return acc;
  }, {});

  const getSongObjects = (items) => items.map(async (item) => {
    const songLikesObject = await apiUtil.getSongLikes(item.id);
    // console.log(item.id);
    // console.log(songLikesObject);
    // console.log(songLikesObject.count);
    const newSong = {
      id: item.id,
      nameSong: item.name,
      genre: item.genre.name,
      artist: item.artist.name,
      count: songLikesObject.count,
      like: songLikesObject.like,
      albumArtUrl: item.albumArtUrl,
    };
    return newSong;
  }, []);

  const getInventory = async (song) => {
    const songObjects = await Promise.all(getSongObjects(song));
    setSongInventory(songObjects);
    // console.log({ songObjects });
    const groupedSongObjects = groupByGenre(songObjects);
    setGroupedSongs(groupedSongObjects);
  };

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/home">
            <Home songInventory={songInventory} onIncrement={onIncrement} />
          </Route>
          <Route path="/genre">
            <Genre groupedSongs={groupedSongs} />
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
