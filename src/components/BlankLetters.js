import React from 'react';

const BlankLetters = ({ selectedWord }) => {
  const wordArray = selectedWord.split('');
  console.log(wordArray);
  return (
    <div>
      {wordArray.map((letter, index) => {
        return <input disabled key={index} className="letter" id={letter} />;
      })}
    </div>
  );
};

export default BlankLetters;
