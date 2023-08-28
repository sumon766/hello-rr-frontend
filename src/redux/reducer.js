import {
  FETCH_GREETING_REQUEST,
  FETCH_GREETING_SUCCESS,
  FETCH_GREETING_FAILURE,
} from './actions';

const initialState = {
  greeting: '',
  loading: false,
  error: null,
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETING_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_GREETING_SUCCESS:
      return { ...state, loading: false, greeting: action.payload };
    case FETCH_GREETING_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default greetingReducer;
