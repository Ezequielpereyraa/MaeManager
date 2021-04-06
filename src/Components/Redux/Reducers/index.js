import { combineReducers } from 'redux';

import * as types from '../Types';

const initialState = {
  user: null,
  tasks: [],
  isLoding: true,
};

const noteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CREATE_USER:
      return {
        ...state,
        user: payload,
      };
    case types.GET_TASKS: {
      return {
        ...state,
        tasks: [...payload],
      };
    }
    case types.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, payload],
        isLoding: !state.isLoding,
      };
    case types.REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== payload),
        isLoding: !state.isLoding,
      };

    case types.EDIT_TASK:
      return {
        isLoding: !state.isLoding,
      };
    default:
      return state;
  }
};

const fondosState = {
  fondos: [],
};

const fondosReducer = (state = fondosState, { type, payload }) => {
  switch (type) {
    case types.ADD_FONDOS:
      return {
        ...state,
        fondos: [...state.fondos, payload],
      };
    case types.GET_FONDOS:
      return {
        fondos: [...payload],
      };
    case types.CLEAN_MONEY: {
      return {
        fondos: [],
      };
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  noteReducer,
  fondosReducer,
});

export default rootReducer;
