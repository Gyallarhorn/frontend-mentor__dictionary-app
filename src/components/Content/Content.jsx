import React, { useContext } from 'react';
import Word from '../blocks/Word/Word';
import { WordContext } from '../../Word';
import Definition from '../blocks/Definition/Definition';
import Source from '../blocks/Source/Source';
import './style.scss';

function Content() {
  const { foundedInfo } = useContext(WordContext);

  let phonetic = '';
  let audio = '';

  console.log(foundedInfo);
  const [word] = foundedInfo.map((obj) => obj.word);
  const [phonetics] = foundedInfo.map((obj) => obj.phonetics);
  if (phonetics.length > 0) {
    try {
      [phonetic] = foundedInfo.map((obj) => obj.phonetic);
      if (!phonetic) {
        phonetic = '';
      }
      audio = phonetics.find((obj) => obj.audio !== '').audio;
    } catch (e) {
      audio = '';
    }
  }
  const meanings = foundedInfo.map((obj) => obj.meanings);
  const url = foundedInfo.map((obj) => obj.sourceUrls);

  return (
    <section className="content">
      <div className="container">
        <Word
          word={word}
          phonetic={phonetic}
          audio={audio}
        />
        <Definition definitionArray={meanings} />
        <Source sourceUrls={url} />
      </div>
    </section>
  );
}

export default Content;
