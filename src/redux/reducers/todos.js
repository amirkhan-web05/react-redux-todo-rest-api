const initialState = {
  todos:[]
}

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TODOS': {
      return {
        ...state,
        todos:action.todos
      }
    }
    
    case 'ADD_TODO': {
      return {
        ...state,
        todos:[...state.todos, action.payload]
      }
    }

    case 'REMOVE_TODO': {
      return {
        ...state,
        todos:state.todos.filter(item => item.id !== action.payload)
      }
    }

    case 'TOGGLE_TODO': {
      return {
        ...state,
        todos:state.todos.map(item => {
          return item.id === action.payload ? {...item, completed:!item.completed} : item
        })
      }
    }

    default:
      return state
  }
}