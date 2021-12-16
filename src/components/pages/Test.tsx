import React, { FunctionComponent, useReducer } from 'react';

import { useNotification } from '../base/Notification';

const initialState = {count: 0};

function reducer(state, action) {
  switch (action) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

const Test: FunctionComponent = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const showNotification = useNotification();

    return <div className="d-flex fjc-center">
        <span>
            Count :{ state.count }
        </span>
        <button onClick={()=> dispatch('increment')}>+</button>
        <button onClick={()=> dispatch('decrement')}>-</button>
        <button onClick={() => showNotification("This is the title", '', 'success')}>Show</button>
    </div>;
};



export default Test;
