import React, { FunctionComponent, useReducer } from 'react';

import { useNotification } from '../base/Notification';
import { useModal } from '../base/Modal';
import Button from '../base/Button';

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
    const [showModal, closeModal] = useModal();

    const body = <div>test</div>;
    const footer = <div>
      <Button onClick={() => closeModal()}>Close</Button>
    </div>;

    return <div className="d-flex fjc-center">
        <span>
            Count :{ state.count }
        </span>
        <button onClick={()=> dispatch('increment')}>+</button>
        <button onClick={()=> dispatch('decrement')}>-</button>
        <button onClick={() => showNotification({style: 'warning', details: "These are details"})}>Show</button>
        <button onClick={() => showModal({ body, footer })}>Show Modal</button>
    </div>;
};



export default Test;
