import React from 'react';
import './style.scss';

function Error() {
  return (
    <section className="error">
      <div className="container error__container">
        <h1 className="error__title">No Definitions Found</h1>
        <p className="error__text">Sorry pal, we couldn&apos;t find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
      </div>
    </section>
  );
}

export default Error;
