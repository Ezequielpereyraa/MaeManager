import { ADD_TASK, CREATE_USER, EDIT_TASK, GET_TASKS, LOADING, REMOVE_TASK } from '../Types';

const initialState = {
  user: null,
  tasks: [],
  isLoding: true,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_USER:
      return {
        ...state,
        user: payload,
      };
    case GET_TASKS: {
      return {
        ...state,
        tasks: [...payload],
      };
    }
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, payload],
        isLoding: !state.isLoding,
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== payload),
        isLoding: !state.isLoding,
      };
    case LOADING:
      return {
        isLoding: !state.isLoding,
      };
    case EDIT_TASK:
      return {
        isLoding: !state.isLoding,
      };
    default:
      return state;
  }
};

export default rootReducer;
