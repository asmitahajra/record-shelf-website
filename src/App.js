/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
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

  const onIncrement = async (id) => {
    const songGet = songInventory.find((song) => song.id === id);
    const likedOrNot = !songGet.like;
    const songLiked = await apiUtil.updateSongLikes(id, likedOrNot);

    const newSongInventory = songInventory.map((eachSong) => (eachSong.id === id ? {
      ...eachSong, like: songLiked.like, count: songLiked.count,
    } : eachSong));
    setSongInventory(newSongInventory);
    const groupedSongObjects = groupByGenre(newSongInventory);
    setGroupedSongs(groupedSongObjects);
  };

  const onIncrementForGenre = async (id) => {
    let eachCat;
    let songGet;
    let likedOrNot;
    let songCat;

    for (const songCategory of Object.keys(groupedSongs)) {
      eachCat = groupedSongs[songCategory];
      songGet = eachCat.find((song) => song.id === id);
      if (!songGet) {
        continue;
      }
      likedOrNot = !songGet.like;
      songCat = songCategory;
      if (songGet) {
        break;
      }
    }

    const songLiked = await apiUtil.updateSongLikes(id, likedOrNot);
    const newCategory = groupedSongs[songCat];
    const index = newCategory.findIndex((e) => e.id === songGet.id);

    const newSongObject = { ...songGet, like: songLiked.like, count: songLiked.count };
    newCategory[index] = newSongObject;
    const newGroupedSongs = { ...groupedSongs, songCat: newCategory };
    setGroupedSongs(newGroupedSongs);

    // now to set setate in song inventory->
    const newSongInventory = songInventory.map((eachSong) => (eachSong.id === id ? {
      ...eachSong, like: songLiked.like, count: songLiked.count,
    } : eachSong));
    setSongInventory(newSongInventory);
  };

  const getSongObjects = (items) => items.map(async (item) => {
    const songLikesObject = await apiUtil.getSongLikes(item.id);
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
            <Genre groupedSongs={groupedSongs} onIncrement={onIncrementForGenre} />
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
