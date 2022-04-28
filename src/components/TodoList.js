import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddTodo } from '../redux/actions/todos';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  const todos = useSelector((state) => state.todos.todos);

  const onAddTodo = () => {
    dispatch(fetchAddTodo(value));
    setValue('');
  };

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Todo..."
      />
      <button onClick={onAddTodo}>Add todo</button>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};
