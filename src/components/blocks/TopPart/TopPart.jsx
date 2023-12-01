import React, { useState } from 'react';
import './style.scss';
import PropTypes from 'prop-types';

function TopPart({
  theme, onToggleTheme, currentFont, onToggleFont,
}) {
  const [open, setOpen] = useState(false);

  const openFontList = () => {
    setOpen(!open);
  };

  const handleFontListKeyDown = (e) => {
    if (e.code === 'Enter') {
      setOpen(true);
    } else if (e.code === 'Escape') {
      setOpen(false);
    }
  };

  const handleChangeFont = (e) => {
    if (e.target && e.target.classList.contains('customization__font-item')) {
      onToggleFont(e.target.textContent);
      setOpen(false);
    }
  };

  const handleChangeFontKeyDown = (e) => {
    if (e.code === 'Enter') {
      onToggleFont(e.target.textContent);
      setOpen(false);
    }
  };

  return (
    <div className="top-part">
      <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="34" height="38" viewBox="0 0 34 38" aria-label="logo">
        <g fill="none" fillRule="evenodd" stroke="#838383" strokeLinecap="round" strokeWidth="1.5">
          <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
          <path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8" />
          <path d="M11 9h12" />
        </g>
      </svg>
      <div className="customizaion">
        <div
          className="customization__font"
          onClick={openFontList}
          tabIndex={0}
          onKeyDown={handleFontListKeyDown}
          role="button"
        >
          <span className="customization__current-font">{currentFont}</span>
        </div>
        {/* eslint-disable jsx-a11y/no-noninteractive-tabindex */}
        {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
        <ul
          className={open ? 'customization__font-list customization__font-list--active' : 'customization__font-list'}
          onClick={handleChangeFont}
          onKeyDown={handleChangeFontKeyDown}
        >
          <li className="customization__font-item inter" tabIndex={0}>Sans Serif</li>
          <li className="customization__font-item lora" tabIndex={0}>Serif</li>
          <li className="customization__font-item mono" tabIndex={0}>Mono</li>
        </ul>
        <div className="customization__theme theme">
          <button
            className={theme === 'light' ? 'theme__button' : 'theme__button theme__button--active'}
            aria-label="change theme"
            type="button"
            onClick={onToggleTheme}
          />
          <svg
            className={theme === 'light' ? 'theme__icon' : 'theme__icon theme__icon--dark'}
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
          >
            <path fill="none" stroke="#838383" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

TopPart.propTypes = {
  theme: PropTypes.string.isRequired,
  currentFont: PropTypes.string.isRequired,
  onToggleTheme: PropTypes.func.isRequired,
  onToggleFont: PropTypes.func.isRequired,
};

export default TopPart;
