import React, {useCallback, useEffect, useState} from 'react';
import styled from "styled-components";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";
import words from "../../wordsList.json"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 800px;
  gap: 2rem;
`;

const getWord = () => {
  return words[Math.floor(Math.random() * words.length)]
}

export const Hangman = () => {
  const [wordToGuess, setWordToGuess] = useState(getWord);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));

  const isLooser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isLooser || isWinner) {
      return
    }
    setGuessedLetters((currentLetters) => [...currentLetters, letter]);
  }, [guessedLetters, isWinner, isLooser])

  useEffect(() => {
    const handler = (element: KeyboardEvent) => {
      const key = element.key;
      if (!key.match(/^[a-z]$/)) return;
      element.preventDefault();
      addGuessedLetter(key);
    }
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    }
  }, [addGuessedLetter]);
  useEffect(() => {
    const handler = (element: KeyboardEvent) => {
      const key = element.key;
      if (key !== "Enter") return;

      element.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord())
    }
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    }
  }, [addGuessedLetter]);

  return (
    <Container>
      <div>
        {isWinner && <span>You win!!!. Hit Enter to refresh</span>}
        {isLooser && <span>Try again:( Hit Enter to refresh</span>}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
      <HangmanWord reveal={isLooser} guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      <div style={{alignSelf: "stretch"}}>
        <Keyboard disabled={isLooser || isWinner}
                  activeLetters={guessedLetters.filter((letter => wordToGuess.includes(letter)))}
                  inactiveLetters={incorrectLetters} addGuessedLetter={addGuessedLetter}/>
      </div>
    </Container>
  );
};

