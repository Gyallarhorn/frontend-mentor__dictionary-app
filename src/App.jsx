import React, { useContext, useEffect, useState } from 'react';
import Search from './components/Search/Search';
import { ThemeContext } from './Theme';
import { FontContext } from './Fonts';
import { WordContext } from './Word';
import Error from './components/Error/Error';
import Content from './components/Content/Content';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { currentFont, toggleFont } = useContext(FontContext);
  const { currentWord, searchWord, setInfo } = useContext(WordContext);
  const [notFound, setNotFound] = useState(false);
  const [isContent, setContent] = useState(false);

  useEffect(() => {
    document.body.classList.remove('dark', 'lora', 'inter', 'mono');
    let sectionClassName = `${theme === 'light' ? '' : 'dark '}`;
    if (currentFont === 'Serif') {
      sectionClassName += 'lora';
    } else if (currentFont === 'Sans Serif') {
      sectionClassName += 'inter';
    } else {
      sectionClassName += 'mono';
    }
    sectionClassName = sectionClassName.split(' ');
    document.body.classList.add(...sectionClassName);
  }, [currentFont, theme]);

  useEffect(() => {
    if (!currentWord) {
      return;
    }

    const search = async () => {
      const data = await searchWord(currentWord);
      if (Object.prototype.hasOwnProperty.call(data, 'title')) {
        setNotFound(true);
        setContent(false);
        return;
      }
      setNotFound(false);
      setInfo(data);
      setContent(true);
    };

    search();
  }, [currentWord]);

  return (
    <>
      <Search
        theme={theme}
        currentFont={currentFont}
        onToggleTheme={toggleTheme}
        onToggleFont={toggleFont}
      />
      {notFound && <Error />}
      {isContent && <Content />}
    </>

  );
}

export default App;
