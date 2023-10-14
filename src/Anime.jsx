import React, { useState, useEffect } from 'react';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import axios from 'axios';

const Anime = () => {
  const [animeData, setAnimeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const url = "https://api.consumet.org/anime/gogoanime/watch/spy-x-family-episode-1";
    try {
      const { data } = await axios.get(url, { params: { server: "gogocdn" } });
      setAnimeData(data.sources[0].url);
      console.log(data.sources[0].url)
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <p>Anime player</p>
      <MediaPlayer title="Sprite Fight" src={animeData}>
        <MediaProvider />
        <DefaultVideoLayout thumbnails="" icons={defaultLayoutIcons} />
      </MediaPlayer>
    </div>
  );
};

export default Anime;
