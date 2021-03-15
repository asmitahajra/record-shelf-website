/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './LandingPage.scss';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import apiUtil from '../../utils/api';

const LandingPage = ({ getInventory }) => {
  const history = useHistory();
  const [songs, setSongs] = useState([]);
  // const [songLikes, setSongLikes] = useState([]);

  const syncUp = async () => {
    const songObjects = await apiUtil.getSongs();
    console.log(songObjects);
    setSongs(songObjects);

    // const songLikesObjects = await apiUtil.getSongLikes('07075cdb-9e5c-41ec-8c09-9a1322dd92d8');
    // console.log(songLikesObjects);
    // setSongLikes(songLikesObjects);
    getInventory(songObjects);
    history.push('/home');
  };

  return (
    <div className="landing">
      <h1>:((</h1>
      <h1>Seems a bit empty in here...</h1>
      <div className="sync-button">
        <button type="button" onClick={syncUp}>Sync</button>
      </div>
    </div>
  );
};

export default LandingPage;
