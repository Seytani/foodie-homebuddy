import React, { FunctionComponent, useReducer, useContext } from 'react';

import Notification, { useNotification, NotificationContext } from '../base/NotificationV2';

// import { useNotification } from '@/components/base/NotificationV2';

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
    // const showNotification = useNotification();

    const notification = useContext(NotificationContext);
    const toggleNotification = () => {
      notification.setVisible(!notification.visible);
    };

    return <div className="d-flex fjc-center">
        <span>
            Count :{ state.count }
        </span>
        <button onClick={()=> dispatch('increment')}>+</button>
        <button onClick={()=> dispatch('decrement')}>-</button>
        <button onClick={() => toggleNotification()}>Show</button>
    </div>;
};



export default Test;
