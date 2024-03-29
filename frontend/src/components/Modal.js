import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, order: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

export default function Popup() {
  const [{ order }] = useReducer(reducer, {
    loading: true,
    order: {},
    error: ''
  });

  return <div> </div>;
}
