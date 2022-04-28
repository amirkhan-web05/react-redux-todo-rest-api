import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchOnToggleTodo, fetchRemoveTodo } from '../redux/actions/todos';

export const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const onRemoveTodo = () => {
    dispatch(fetchRemoveTodo(id));
  };

  const onToggleTodo = () => {
    dispatch(fetchOnToggleTodo(id, completed));
  };

  return (
    <div>
      <h2 style={{ textDecoration: completed ? 'line-through' : null }}>
        {title}
      </h2>
      <button onClick={onRemoveTodo}>Delete</button>
      <input type="checkbox" onChange={onToggleTodo} checked={completed} />
    </div>
  );
};
