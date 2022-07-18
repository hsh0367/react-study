import React from 'react';
import {createGlobalStyle} from 'styled-components'
import TodoTemplate from './components/TodoTempate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodList';
import TodoCreate from './components/TodoCreate';
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
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}


export default App;