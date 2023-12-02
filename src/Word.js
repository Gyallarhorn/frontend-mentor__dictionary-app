import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';

const WordContext = createContext();

const getWord = () => {
  const word = localStorage.getItem('word');
  if (!word) {
    localStorage.setItem('word', '');
    return '';
  }
  return word;
};

function WordProvider({ children }) {
  const [currentWord, setWord] = useState(getWord);
  const [foundedInfo, setInfo] = useState(null);

  const toggleWord = (word) => {
    if (currentWord !== word) {
      setWord(word);
    }
  };

  const searchWord = async (word) => {
    let data = '';
    if (word) {
      const request = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      data = await request.json();
    }
    return data;
  };

  useEffect(() => {
    const refreshWord = async () => {
      localStorage.setItem('word', currentWord);
    };

    refreshWord();
  }, [currentWord]);

  const contextValue = useMemo(() => ({
    currentWord,
    foundedInfo,
    searchWord,
    toggleWord,
    setInfo,
  }), [currentWord, foundedInfo]);

  return (
    <WordContext.Provider value={contextValue}>
      {children}
    </WordContext.Provider>
  );
}

WordProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { WordContext, WordProvider };
