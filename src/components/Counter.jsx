import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { artır, azalt, reset } from "../redux/actions/counterAction";


const Counter = () => {
  //store consume edilir = useSelector | react-redux
  // const counter = useSelector((state)=>state.counter)
  const counter = useSelector((state) => state.count.counter)
  // action olduğunda = useDispatch() | react-redux
  const dispatch = useDispatch()
  // action = {type, payload}

  return (
    <div>
      <h1 className="display-3 text-danger my-5">Counter</h1>
      <h5 className="display-6 mb-3">Counter: {counter}</h5>
      <button onClick={()=>dispatch(artır())} className="btn btn-dark mx-3 btn-lg">Artır</button>
      <button onClick={()=>dispatch(reset())} className="btn btn-danger mx-3 btn-lg">Resetle</button>
      <button onClick={()=>dispatch(azalt())} className="btn btn-dark mx-3 btn-lg">Azalt</button>
      
    </div>
  );
};

export default Counter;
