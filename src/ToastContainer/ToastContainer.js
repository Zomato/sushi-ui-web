/* eslint-disable indent */
import React, { useReducer, createContext } from 'react';
import PropTypes from 'prop-types';

const ADD_TOP_TOAST = (toast) => ({ type: 'add-toast-top', toast });
const ADD_BOTTOM_TOAST = (toast) => ({ type: 'add-toast-bottom', toast });
const REMOVE_TOP_TOAST = (toast) => ({ type: 'remove-toast-top', toast });
const REMOVE_BOTTOM_TOAST = (toast) => ({ type: 'remove-toast-bottom', toast });

const ToastContext = createContext();
const initialState = {
  topToasts: [],
  bottomToasts: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'add-toast-top':
      return {
        ...state,
        topToasts: [...state.topToasts, action.toast],
      };
    case 'add-toast-bottom':
      return {
        ...state,
        bottomToasts: [...state.bottomToasts, action.toast],
      };
    case 'remove-toast-top':
      return {
        ...state,
        topToasts: state.topToasts.filter((t) => t != action.toast),
      };
    case 'remove-toast-bottom':
      return {
        ...state,
        bottomToasts: state.bottomToasts.filter((t) => t != action.toast),
      };
  }
};

const ToastProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ToastContext.Provider value={{ state, dispatch }}>
      {children}
    </ToastContext.Provider>
  );
};

ToastProvider.propTypes = {
  children: PropTypes.node,
};

export {
  ToastContext,
  ToastProvider,
  ADD_BOTTOM_TOAST,
  REMOVE_TOP_TOAST,
  ADD_TOP_TOAST,
  REMOVE_BOTTOM_TOAST,
};
