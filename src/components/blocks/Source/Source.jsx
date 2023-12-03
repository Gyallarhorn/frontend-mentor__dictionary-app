/* eslint-disable react/no-array-index-key */
import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

function Source({ sourceUrls }) {
  let urls = '';

  sourceUrls.forEach((sourceUrl) => sourceUrl.forEach((link) => {
    urls += `${link} `;
  }));

  urls = urls
    .trim()
    .split(' ')
    .filter((elem, i, array) => array.indexOf(elem) === i);

  return (
    <section className="source">
      <h2 className="source__title">Source</h2>
      <ul className="source__list">
        {urls.map((url, i) => (
          <li className="source-list__item" key={i}>
            <a className="source-list__link" href={url} target="_blank" rel="noreferrer">{url}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

Source.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  sourceUrls: PropTypes.array.isRequired,
};

export default Source;
