import "./App.css";
import Action from "./components/Action";
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <div className="container">
        <h1>{props.count}</h1>
        <Action action={props} />
      </div>
    </div>
  );
}

function mapsStateToProps(state) {
  return {
    count: state.value,
  };
}

export default connect(mapsStateToProps)(App);
