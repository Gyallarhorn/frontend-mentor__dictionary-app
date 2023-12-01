import React from 'react';
import PropTypes from 'prop-types';
import TopPart from '../blocks/TopPart/TopPart';
import SearchPart from '../blocks/SearchPart/SearchPart';

function Search({
  theme, onToggleTheme, currentFont, onToggleFont,
}) {
  return (
    <section className="search">
      <div className="container">
        <TopPart
          theme={theme}
          currentFont={currentFont}
          onToggleTheme={onToggleTheme}
          onToggleFont={onToggleFont}
        />
        <SearchPart />
      </div>
    </section>

  );
}

Search.propTypes = {
  theme: PropTypes.string.isRequired,
  currentFont: PropTypes.string.isRequired,
  onToggleTheme: PropTypes.func.isRequired,
  onToggleFont: PropTypes.func.isRequired,
};

export default Search;
