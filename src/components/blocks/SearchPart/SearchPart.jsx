import React, {
  useContext, useEffect, useState,
} from 'react';
import './style.scss';
import { WordContext } from '../../../Word';

function SearchPart() {
  const [inputError, setInputError] = useState(false);
  const { toggleWord, currentWord } = useContext(WordContext);
  const [inputWord, setInputWord] = useState(currentWord);

  const handleButtonClick = () => {
    if (!inputWord.trim()) {
      setInputError(true);
    } else {
      setInputError(false);
      toggleWord(inputWord.trim());
    }
  };

  useEffect(() => {
    setInputWord(currentWord);
  }, [currentWord]);

  const handleinputKeyDown = (e) => {
    if (e.code === 'Enter') {
      handleButtonClick();
    }
  };

  const handleChange = (e) => {
    const newValue = e.target.value.replace(/[^A-Za-z' ]/g, '').replace(/\s+/g, ' ');
    setInputWord(newValue);
  };

  return (
    <div className="search-part">
      <label className="search-part__label" htmlFor="search">
        <span className="visually-hidden">Search input. Type any word</span>
        <input
          className={`search-part__input ${inputError ? 'invalid' : ''}`}
          type="text"
          name="search"
          id="search"
          placeholder="Search for any word…"
          onKeyDown={handleinputKeyDown}
          onChange={(e) => handleChange(e)}
          value={inputWord}
        />
      </label>
      <button className="search-part__button" type="button" aria-label="search button" onClick={handleButtonClick} />
      <span className={`search-part__error ${inputError ? 'shaking' : ''}`}>Whoops, can’t be empty…</span>
    </div>
  );
}

export default SearchPart;
