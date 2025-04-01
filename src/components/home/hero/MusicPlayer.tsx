'use client'
import { useState, useEffect } from 'react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const newAudio = new Audio('/main-music.mp3');
    newAudio.loop = true;
    setAudio(newAudio);

    // Попытка автоматического воспроизведения
    newAudio.play().then(() => {
      setIsPlaying(true);
    }).catch((error) => {
      console.error("Ошибка при воспроизведении музыки:", error);
    });

    return () => {
      newAudio.pause();
    };
  }, []);

  const togglePlay = () => {
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => console.error("Ошибка при воспроизведении музыки:", error));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button onClick={togglePlay}>{isPlaying ? 'Pause Music' : 'Play Music'}</button>
    </div>
  );
};

export default MusicPlayer;
