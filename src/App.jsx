import React, { useContext, useEffect, useState } from 'react';
import Search from './components/Search/Search';
import { ThemeContext } from './Theme';
import { FontContext } from './Fonts';
import { WordContext } from './Word';
import Error from './components/Error/Error';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { currentFont, toggleFont } = useContext(FontContext);
  const { currentWord, searchWord, setInfo } = useContext(WordContext);
  const [notFound, setNotFound] = useState(false);

  let sectionClassName = `app ${theme === 'light' ? '' : 'dark '}`;
  if (currentFont === 'Serif') {
    sectionClassName += 'lora';
  } else if (currentFont === 'Sans Serif') {
    sectionClassName += 'inter';
  } else {
    sectionClassName += 'mono';
  }

  useEffect(() => {
    if (!currentWord) {
      return;
    }

    const search = async () => {
      const data = await searchWord(currentWord);
      if (Object.prototype.hasOwnProperty.call(data, 'title')) {
        setNotFound(true);
        return;
      }
      setNotFound(false);
      setInfo(data);
    };

    search();
  }, [currentWord]);

  return (
    <div className={sectionClassName}>
      <Search
        theme={theme}
        currentFont={currentFont}
        onToggleTheme={toggleTheme}
        onToggleFont={toggleFont}
      />
      {notFound && <Error />}
    </div>

  );
}

export default App;
