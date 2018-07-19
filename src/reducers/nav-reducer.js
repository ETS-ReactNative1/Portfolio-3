import { CHANGE_LOCATION } from '../actions/nav-actions';

const initalState = {
  location: '/work'
};

const navReducer = (state = initalState, action) => {
  if (action.type === CHANGE_LOCATION) {
    return {
      ...state,
      location: action.location
    };
  }

  return state;
};

export default navReducer;
