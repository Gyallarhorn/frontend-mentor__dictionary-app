/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef } from 'react';
import './style.scss';
import PropTypes from 'prop-types';

function Word({ word, phonetic, audio }) {
  const audioRef = useRef(null);

  const playAudio = (e) => {
    if (e.target.closest('.play-button')) {
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
          <audio ref={audioRef} src={audio}>
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
