export const FETCH_GREETING_REQUEST = 'FETCH_GREETING_REQUEST';
export const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';
export const FETCH_GREETING_FAILURE = 'FETCH_GREETING_FAILURE';

const fetchGreetingRequest = () => ({
  type: FETCH_GREETING_REQUEST,
});

const fetchGreetingSuccess = (greeting) => ({
  type: FETCH_GREETING_SUCCESS,
  payload: greeting,
});

const fetchGreetingFailure = (error) => ({
  type: FETCH_GREETING_FAILURE,
  payload: error,
});

export const fetchRandomGreeting = () => (dispatch) => {
  dispatch(fetchGreetingRequest());
  fetch('http://127.0.0.1:3000/api/v1/random_greeting')
    .then((response) => response.json())
    .then((data) => {
      const { greeting } = data;
      dispatch(fetchGreetingSuccess(greeting));
    })
    .catch((error) => {
      dispatch(fetchGreetingFailure(error.message));
    });
};
