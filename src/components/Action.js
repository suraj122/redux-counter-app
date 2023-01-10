import React from "react";
import { decrement, increment, reset } from "../store/action";

export function Action(props) {
  return (
    <div>
      <button
        onClick={() => props.action.dispatch(increment())}
        className="action"
      >
        Increment
      </button>
      <button
        onClick={() => props.action.dispatch(decrement())}
        className="action"
      >
        Decrement
      </button>
      <button onClick={() => props.action.dispatch(reset())} className="action">
        Reset
      </button>
    </div>
  );
}

export default Action;
