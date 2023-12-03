/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { WordContext } from '../../../Word';

function Definition({ definitionArray }) {
  const { toggleWord } = useContext(WordContext);

  const handleClick = (e) => {
    if (e.target && e.target.classList.contains('synonyms__item-button')) {
      toggleWord(e.target.textContent);
    }
  };

  return (
    <section className="definition">
      {definitionArray.map((part, index) => (
        <div className="definition__part part" key={index}>
          {part.map((elem, i) => (
            <div className="part__meaning meaning" key={i}>
              <h2 className="meaning__speech">{elem.partOfSpeech}</h2>
              <h3 className="meaning__type">Meaning</h3>
              <ul className="meaning__list definition-list">
                {elem.definitions.map(({ definition, example }, id) => (
                  <li className="definition__item" key={id}>
                    <span className="definition__item-text">{definition}</span>
                    {example && (
                    <span className="definition__item-example">
                      “
                      {example}
                      ”
                    </span>
                    )}
                  </li>
                ))}
              </ul>
              {elem.synonyms.length > 0
                ? (
                  <ul className="definition__synonyms synonyms" onClick={(e) => handleClick(e)}>
                    <li className="synonyms__item">Synonyms</li>
                    {elem.synonyms.map((syn, key) => (
                      <li className="synonyms__item" key={key}>
                        <button type="button" className="synonyms__item-button">{syn}</button>
                      </li>
                    ))}
                  </ul>
                )
                : ''}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

Definition.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  definitionArray: PropTypes.array.isRequired,
};

export default Definition;
