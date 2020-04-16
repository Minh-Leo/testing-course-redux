import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
// import Input from './Input';
// import { getSecretWord } from './actions';

function App() {
  return (
    <div className='container'>
      <h1>Jotto</h1>
      <Congrats />
      {/* <Input /> */}
      <GuessedWords
        guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
      />
    </div>
  );
}

export default App;
