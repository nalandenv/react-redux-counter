import { connect } from "react-redux";
import { decrement, increment } from "../redux/counter/counterActions";

const Counter = ({ counter, increment, decrement }: any) => {
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>Increment </button>
      <button onClick={decrement}>Decrement </button>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
