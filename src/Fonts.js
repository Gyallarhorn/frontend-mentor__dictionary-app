import React, {
  createContext, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';

const FontContext = createContext();

const getFont = () => {
  const font = localStorage.getItem('font');
  if (!font) {
    localStorage.setItem('font', 'Mono');
    return 'Mono';
  }
  return font;
};

function FontProvider({ children }) {
  const [currentFont, setFont] = useState(getFont);

  const toggleFont = (font) => {
    if (currentFont !== font) {
      setFont(font);
    }
  };

  useEffect(() => {
    const refreshFont = () => {
      localStorage.setItem('font', currentFont);
    };

    refreshFont();
  }, [currentFont]);

  const contextValue = useMemo(() => ({
    currentFont,
    setFont,
    toggleFont,
  }), [currentFont]);

  return (
    <FontContext.Provider value={contextValue}>
      {children}
    </FontContext.Provider>
  );
}

FontProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { FontProvider, FontContext };
