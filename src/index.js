import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/style.scss';
import { ThemeProvider } from './Theme';
import { FontProvider } from './Fonts';
import { WordProvider } from './Word';

const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(
  <ThemeProvider>
    <FontProvider>
      <WordProvider>
        <App />
      </WordProvider>
    </FontProvider>
  </ThemeProvider>,
);
