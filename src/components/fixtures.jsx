import React from 'react';
import labels from '../assets/labels';

const Fixtures = () => (
  <div>
    <h1>Fixtures</h1>
    <article>
      <header>
        <h3>Friday 11th June</h3>
      </header>
      <div>
        <span>
          {labels.Turkey} vs {labels.Italy}
        </span>
        <p>Rome 20:00</p>
      </div>
    </article>
  </div>
);

export default Fixtures;