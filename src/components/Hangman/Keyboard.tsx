import React from 'react';
import styled from "styled-components";

const KEYS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const Button = styled.button<{ isActive?: boolean }>`
  width: 100%;
  border: 3px solid #53A115FF;
  background: ${({isActive}) => isActive ? "hsl(100, 100%, 50%)" : "none"};
  aspect-ratio: 1 / 1;
  font-size: 2.5rem;
  text-transform: uppercase;
  padding: .5rem;
  font-weight: bold;
  cursor: pointer;

  color: white;

  &:active {
    color: black;
  }

  &:hover:not(:disabled), &:focus:not(:disabled) {
    background-color: hsl(100, 100%, 75%);
  }

  &:disabled {
    opacity: 0.3;
  }
`;

interface IKeyboard {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
}

const Keyboard = ({inactiveLetters, activeLetters, addGuessedLetter, disabled = false}: IKeyboard) => {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
      gap: ".5rem",
      color: "white"
    }}>
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return <Button key={key} isActive={isActive} disabled={isInactive || isActive || disabled}
                       onClick={() => addGuessedLetter(key)}>{key}</Button>
      })}
    </div>
  );
};

export default Keyboard;