import React, { useContext } from 'react';
import Word from '../blocks/Word/Word';
import { WordContext } from '../../Word';
import Definition from '../blocks/Definition/Definition';

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
      audio = phonetics.find((obj) => obj.audio !== '').audio;
    } catch (e) {
      audio = '';
    }
  }
  const meanings = foundedInfo.map((obj) => obj.meanings);

  return (
    <section className="content">
      <div className="container">
        <Word
          word={word}
          phonetic={phonetic}
          audio={audio}
        />
        <Definition definitionArray={meanings} />
      </div>
    </section>

  );
}

export default Content;
