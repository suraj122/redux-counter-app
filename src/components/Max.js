import React from "react";
import { connect } from "react-redux";
import { updateMax } from "../store/action";

function Max(props) {
  function handleClick(max) {
    props.dispatch(updateMax(max));
  }

  return (
    <div>
      <button
        onClick={() => handleClick(15)}
        className={props.max === 15 ? "active" : ""}
      >
        15
      </button>
      <button
        onClick={() => handleClick(50)}
        className={props.max === 50 ? "active" : ""}
      >
        50
      </button>
      <button
        onClick={() => handleClick(100)}
        className={props.max === 100 ? "active" : ""}
      >
        100
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    max: state.max,
  };
}

export default connect(mapStateToProps)(Max);
