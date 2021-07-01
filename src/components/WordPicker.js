import React, { useState } from 'react';

const WordPicker = ({ setSelectedWord }) => {
  const [wordList, setWordList] = useState([
    'apples',
    'bananagrams',
    'axolotl',
    'chrysanthemum',
  ]);
  //const [hasSelectedWord, setHasSelectedWord] = useState(false)
  const [hasRunOutOfWords, setHasRunOutOfWords] = useState(false);

  const selectWord = () => {
    if (wordList.length > 1) {
      const index = Math.floor(Math.random() * wordList.length);

      setSelectedWord(wordList[index]);
      setWordList((currWordList) => {
        const newWordList = [...currWordList];
        newWordList.splice(index, 1);

        return newWordList;
      });
    } else {
      setHasRunOutOfWords(true);
    }
  };

  return (
    <section>
      <button disabled={hasRunOutOfWords} onClick={selectWord}>
        Select a random word
      </button>

      {hasRunOutOfWords ? (
        <p>You've gone through all the words now! Finito!</p>
      ) : null}
    </section>
  );
};

export default WordPicker;
