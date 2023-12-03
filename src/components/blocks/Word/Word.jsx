import React, { useEffect, useRef } from 'react';
import './style.scss';
import PropTypes from 'prop-types';

function Word({ word, phonetic, audio }) {
  const audioRef = useRef(null);

  const playAudio = (e) => {
    if ((e.target.classList.contains('play-button') || e.target.closest('.play-button'))) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = audio;
    }
  }, [audio]);

  return (
    <section className="content__top">
      <div className="info">
        <h1 className="info__word">{word}</h1>
        <span className="info__phonetic">{phonetic}</span>
      </div>
      {audio ? (
        <button
          onClick={(e) => playAudio(e)}
          type="button"
          className="play-button"
          aria-label="Play audio"
        >
          <audio ref={audioRef}>
            <source src={audio} type="audio/mp3" />
            <track kind="captions" srcLang="en" label={word} />
            Тег аудио не поддерживается вашим браузером
          </audio>
        </button>
      ) : ''}
    </section>

  );
}

Word.propTypes = {
  word: PropTypes.string.isRequired,
  phonetic: PropTypes.string.isRequired,
  audio: PropTypes.string.isRequired,
};

export default Word;
