import React from 'react';
import './App.css';
import CharacterContainer from "./components/CharacterContainer";
import styled from 'styled-components'

const Font = styled.div`
text-align: center;
color: blue;
font-size: 20px;
text-shadow: 5px 2px #FFF;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div>
      <Font>
      <h1>React Wars</h1>
      </Font>
      <CharacterContainer />
    </div>
  );
}

export default App;
