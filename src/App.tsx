import React from 'react';
import './App.css';
import styled from "styled-components";
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom';
import {SimpleCounter} from "./components/SimpleCounter/SimpleCounter";
import {DoubleCounter} from "./components/DoubleCounter/DoubleCounter";
import {ChangingCounter} from "./components/ChangingCounter/ChangingCounter";
import {ReduxCounter} from "./components/ReduxCounter/ReduxCounter";
import {Hangman} from "./components/Hangman/Hangman";


const AppStyle = styled.div`
  box-sizing: border-box;
  background-color: #000000;
  padding: 10px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const NavigationStyle = styled.div`
  width: 250px;
  margin: 0 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #53A115FF;
  border-radius: 10px;
  font-size: 24px;

  a {
    padding: 5px;
    margin: 5px;
    display: block;
    color: white;
    text-decoration: none
  }

  a:hover {
    font-weight: 700;
  }
`

function App() {
  return (
    <Router>
      <AppStyle>
        <NavigationStyle>
          <NavLink to={'/simple'}>Simple Counter</NavLink>
          <NavLink to={'/double'}>Double Counter</NavLink>
          <NavLink to={'/changing'}>Changing Counter</NavLink>
          <NavLink to={'/redux'}>Redux Counter</NavLink>
          <NavLink to={'/hangman'}>Hangman</NavLink>
        </NavigationStyle>
        <Routes>
          <Route path={'/simple'} element={<SimpleCounter/>}/>
          <Route path={'/double'} element={<DoubleCounter/>}/>
          <Route path={'/changing'} element={<ChangingCounter/>}/>
          <Route path={'/redux'} element={<ReduxCounter/>}/>
          <Route path={'/hangman'} element={<Hangman/>}/>
        </Routes>
      </AppStyle>
    </Router>
  );
}

export default App;
