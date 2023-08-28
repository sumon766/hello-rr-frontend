import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from './redux/actions';

function Greeting() {
  const dispatch = useDispatch();
  const { greeting, loading, error } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div style={{ display: 'flex' }}>
      <h2 style={{ marginRight: '10px' }}>Greeting: </h2>
      <h2>{greeting}</h2>
    </div>
  );
}

export default Greeting;
