import React, {
  useContext, useRef, useState,
} from 'react';
import './style.scss';
import { WordContext } from '../../../Word';

function SearchPart() {
  const input = useRef(null);
  const [inputError, setInputError] = useState(false);
  const { toggleWord } = useContext(WordContext);

  const handleButtonClick = async () => {
    if (!input.current.value) {
      setInputError(true);
    } else {
      setInputError(false);
      toggleWord(input.current.value);
    }
  };

  const handleinputKeyDown = (e) => {
    if (e.code === 'Enter') {
      handleButtonClick();
    }
  };

  const handleChange = (e) => {
    e.target.value = e.target.value.replace(/[^A-Za-z]/g, '');
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
          ref={input}
          onKeyDown={handleinputKeyDown}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <button className="search-part__button" type="button" aria-label="search button" onClick={handleButtonClick} />
      <span className={`search-part__error ${inputError ? 'shaking' : ''}`}>Whoops, can’t be empty…</span>
    </div>
  );
}

export default SearchPart;
