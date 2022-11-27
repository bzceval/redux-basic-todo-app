import React from "react";

const Counter = () => {
  return (
    <div>
      <h1 className="display-3 text-danger my-5">Counter</h1>
      <h5 className="display-6 mb-3">Counter: 0</h5>
      <button className="btn btn-dark mx-3 btn-lg">Artır</button>
      <button className="btn btn-danger mx-3 btn-lg">Resetle</button>
      <button className="btn btn-dark mx-3 btn-lg">Azalt</button>
      
    </div>
  );
};

export default Counter;
