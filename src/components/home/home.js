import React, { Fragment, useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount(count + 1);
  };

  const decrementHandler = () => {
    setCount(count - 1);
  };
  return (
    <Fragment>
      <h1>Welcome home</h1>
      <button onClick={incrementHandler}>+</button>
      <h3>{count}</h3>
      <button onClick={decrementHandler}>-</button>
    </Fragment>
  );
};

export default Home;
