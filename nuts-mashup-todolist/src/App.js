import React from 'react';
import {createGlobalStyle} from 'styled-components'
import TodoTemplate from './components/TodoTempate';
import TodoHead from './components/TodoHead';


const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoHead />

      </TodoTemplate>
    </>
  );
}


export default App;