import React, { useState } from 'react';

const LetterGuess = () => {
  const [letter, setLetter] = useState('');
  const [guess, setGuess] = useState('');
  console.log(guess);
  console.log(letter);
  return (
    <section>
      <input
        className="guess-input"
        onChange={(event) => setLetter(event.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setGuess(letter)}>Guess</button>
    </section>
  );
};

export default LetterGuess;
