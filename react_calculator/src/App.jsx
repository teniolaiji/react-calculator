import { useReducer } from "react";
import "./App.css";
import ButtonD from "./ButtonD";
import ButtonO from "./ButtonO";
const ACTIONS = {
  CHOOSE_DIGIT: "choose_digit",
  CHOOSE_OPERATION: "choose_operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete_digit",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.CHOOSE_DIGIT:
      if (payload.digit === "0" && state.currentOperation === "0") return state;
      if (payload.digit === "." && state.currentOperation.includes("."))
        return state;
      return {
        ...state,
        currentOperation: `${state.currentOperation || ""}${payload.digit}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperation == null && state.previousOperation == null) {
        return state;
      }
      if (state.previousOperation == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperation: state.currentOperation,
          currentOperation: null,
        };
      }
      return {
        ...state,
        previousOperation: evaluate(state),
        operation: payload.operation,
        currentOperation: null,
      };
  }
}

function App() {
  const [{ currentOperation, previousOperation, operation }, dispatch] =
    useReducer(reducer, {});
  return (
    <div className="min-h-screen flex items-start justify-center pt-60">
      <div
        className="grid gap-1"
        style={{
          gridTemplateColumns: "repeat(4, 4rem)",
          gridTemplateRows: "minmax(5rem, auto) repeat(5, 4rem)",
        }}
      >
        <div className="col-span-4 bg-gray-200 flex flex-col items-end justify-around p-2">
          <div className="text-sm text-gray-500">
            {previousOperation} {operation}
          </div>
          <div className="text-xl font-bold">{currentOperation}</div>
        </div>

        <button
          className="col-span-2 bg-gray-100"
          // onClick={() => dispatch({ type: ACTIONS.CLEAR })}
        >
          AC
        </button>
        <button className="bg-gray-100">DEL</button>
        <ButtonO className="bg-gray-100" dispatch={dispatch} operation="/" />

        <ButtonD className="bg-gray-100" dispatch={dispatch} digit="1" />
        <ButtonD className="bg-gray-100" dispatch={dispatch} digit="2" />
        <ButtonD className="bg-gray-100" dispatch={dispatch} digit="3" />
        <ButtonO className="bg-gray-100" dispatch={dispatch} operation="*" />

        <ButtonD className="bg-gray-100" dispatch={dispatch} digit="4" />
        <ButtonD className="bg-gray-100" dispatch={dispatch} digit="5" />
        <ButtonD className="bg-gray-100" dispatch={dispatch} digit="6" />
        <ButtonO className="bg-gray-100" dispatch={dispatch} operation="-" />

        <ButtonD className="bg-gray-100" dispatch={dispatch} digit="7" />
        <ButtonD className="bg-gray-100" dispatch={dispatch} digit="8" />
        <ButtonD className="bg-gray-100" dispatch={dispatch} digit="9" />
        <ButtonO className="bg-gray-100" dispatch={dispatch} operation="+" />
        <ButtonD className="bg-gray-100" dispatch={dispatch} digit="." />
        <ButtonD className="bg-gray-100" dispatch={dispatch} digit="0" />
        <button className="col-span-2 bg-gray-100">=</button>
      </div>
    </div>
  );
}

export default App;
