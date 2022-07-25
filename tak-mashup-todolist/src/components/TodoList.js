import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="빨래 찾아오기" done={true} />
      <TodoItem text="React 공부하기" done={true} />
      <TodoItem text="서울둘레길 완주하기" done={false} />
      <TodoItem text="5km 이상 러닝하기" done={false} />
    </TodoListBlock>
  );
}

export default TodoList;