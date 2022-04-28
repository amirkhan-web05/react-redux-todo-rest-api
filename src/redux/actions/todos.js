export const fetchTodo = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      dispatch(setTodos(data));
    });
};

export const fetchAddTodo = (value) => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=5', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      id: Math.random(),
      title: value,
      completed: false,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      dispatch(addTodo(data.title));
    });
};

export const fetchRemoveTodo = (id) => (dispatch) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}?_limit=5`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((res) => {
      return res.json();
    })
    .then(() => {
      dispatch(removeTodo(id));
    });
};

export const fetchOnToggleTodo = (id, completed) => (dispatch) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}?_limit=5`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ completed }),
  })
    .then((res) => {
      return res.json();
    })
    .then(() => {
      dispatch(toggleTodo(id, completed));
    });
};

const setTodos = (todos) => ({
  type: 'SET_TODOS',
  todos,
});

export const addTodo = (value) => ({
  type: 'ADD_TODO',
  payload: {
    id: Math.random(),
    title: value,
    completed: false,
  },
});

export const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  payload: id,
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  payload: id,
});
