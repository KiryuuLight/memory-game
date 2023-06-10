import { useState, useRef, useEffect } from 'react';
import data from '../utils/data';
import Card from './Card';
import MessageModal from './MessageModal';

const Gameboard = () => {
  const [blur, setBlur] = useState(false);
  const [winner, setWinner] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [listOfCharacters, setListOfCharacters] = useState([]);

  const dialogRef = useRef(null);

  useEffect(() => {
    if (listOfCharacters.length === 16) {
      setWinner(true);
      setBestScore(score);
      setBlur(true);
      dialogRef.current.show();
    }
  }, [listOfCharacters, score]);

  const resetGame = () => {
    setWinner(false);
    setBlur(false);
    setScore(0);
    setListOfCharacters([]);
    dialogRef.current.close();
  };

  const updateScore = (idPass) => {
    if (!listOfCharacters.some((idChar) => idChar === idPass)) {
      setListOfCharacters((previousValue) => [...previousValue, idPass]);
      setScore((previousValue) => previousValue + 1);
      return;
    }

    setBestScore(score);
    setBlur(true);
    dialogRef.current.show();
  };

  return (
    <>
      <dialog ref={dialogRef}>
        <MessageModal
          message={winner ? 'You Win' : 'Game Over'}
          bestScore={bestScore}
          onRetry={resetGame}
        />
      </dialog>

      <main>
        <div className="score-bar">
          <p className="game-text">{`Score: ${score}`}</p>
          <p className="game-text">{`Best Score: ${bestScore}`}</p>
        </div>

        <div className={`card-section ${blur ? 'blur-and-deactivate' : ''} `}>
          {data
            .map((value) => ({ value, sort: Math.random() })) // Add sort property to array
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value) // Map all values to original
            .map((character, index) => {
              return (
                <Card
                  key={index}
                  id={character.id}
                  name={character.name}
                  imgSrc={character.imgSrc}
                  updateScore={updateScore}
                />
              );
            })}
        </div>
      </main>
    </>
  );
};

export default Gameboard;
