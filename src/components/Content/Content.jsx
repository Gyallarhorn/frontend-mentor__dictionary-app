import React, { useContext } from 'react';
import Word from '../blocks/Word/Word';
import { WordContext } from '../../Word';

function Content() {
  const { foundedInfo } = useContext(WordContext);

  let phonetic = '';
  let audio = '';

  console.log(foundedInfo);
  const [word] = foundedInfo.map((obj) => obj.word);
  const [phonetics] = foundedInfo.map((obj) => obj.phonetics);
  if (phonetics.length > 0) {
    phonetic = phonetics.find((obj) => obj.audio !== '').text;
    audio = phonetics.find((obj) => obj.audio !== '').audio;
  }

  return (
    <section className="content">
      <div className="container">
        <Word
          word={word}
          phonetic={phonetic}
          audio={audio}
        />
      </div>
    </section>

  );
}

export default Content;
