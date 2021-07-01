import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import WordPicker from './components/WordPicker';
import BlankLetters from './components/BlankLetters';
import LetterGuess from './components/LetterGuess';

function App() {
  const [selectedWord, setSelectedWord] = useState('');
  console.log(selectedWord);
  return (
    <div className="App">
      <Header />
      {selectedWord.length < 1 ? (
        <WordPicker
          setSelectedWord={setSelectedWord}
          selectedWord={selectedWord}
        />
      ) : null}
      <br />
      {selectedWord.length > 0 ? (
        <div>
          <BlankLetters selectedWord={selectedWord} />
          <br />
          <LetterGuess />
        </div>
      ) : null}
      <br />
    </div>
  );
}

export default App;
