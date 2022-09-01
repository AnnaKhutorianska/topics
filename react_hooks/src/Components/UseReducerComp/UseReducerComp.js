import { useReducer } from 'react';

const initialValue = {
  username: '',
  email: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeUsername':
      return { ...state, username: action.payload };
    case 'changeEmail':
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

function UseReducerComp () {
  const [state, dispatch] = useReducer(reducer, initialValue);
  console.log(state);
  return (
    <div>
      <input
        value={state.username}
        onChange={(event) =>
          dispatch({ type: 'changeUsername', payload: event.target.value })
        }
      />
      <input
        value={state.email}
        onChange={(event) =>
          dispatch({ type: 'changeEmail', payload: event.target.value })
        }
      />
    </div>
  );
};

export default UseReducerComp;