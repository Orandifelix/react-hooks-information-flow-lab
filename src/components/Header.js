import React from 'react'

export default function Header({ onDarkModeClick }) {
  return (
    <div>
      <header>
        <h1>Shopster</h1>
        <button onClick={onDarkModeClick}>Toggle Mode</button>
      </header>
    </div>
  );
}
