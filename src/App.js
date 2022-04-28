import React from 'react';
import { useDispatch } from 'react-redux';
import { TodoList } from './components/TodoList';
import { fetchTodo } from './redux/actions/todos';
import './index.css';

export default function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  return (
    <div className="App">
      <TodoList />
    </div>
  );
}
