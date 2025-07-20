import { useReducer } from "react";
import "./App.css";
import ButtonDigit from "./Buttondigit";
import ButtonOperation from "./Buttonoperation";

export const actions = {
  choose_digit: "choose_digit",
  choose_operation: "choose_operation",
  clear: "clear",
  delete_digit: "delete_digit",
  evaluate: "evaluate",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case actions.choose_digit:
      return {
        ...state,
        currentOperation: `${currentOperation || ""}${payload.digit}`,
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

        <button className="col-span-2 bg-gray-100">AC</button>
        <button className="bg-gray-100">DEL</button>
        <ButtonOperation
          className="bg-gray-100"
          dispatch={dispatch}
          operation="/"
        />

        <ButtonDigit className="bg-gray-100" dispatch={dispatch} digit="1" />
        <ButtonDigit className="bg-gray-100" dispatch={dispatch} digit="2" />
        <ButtonDigit className="bg-gray-100" dispatch={dispatch} digit="3" />
        <ButtonOperation
          className="bg-gray-100"
          dispatch={dispatch}
          operation="*"
        />

        <ButtonDigit className="bg-gray-100" dispatch={dispatch} digit="4" />
        <ButtonDigit className="bg-gray-100" dispatch={dispatch} digit="5" />
        <ButtonDigit className="bg-gray-100" dispatch={dispatch} digit="6" />
        <ButtonOperation
          className="bg-gray-100"
          dispatch={dispatch}
          operation="-"
        />

        <ButtonDigit className="bg-gray-100" dispatch={dispatch} digit="7" />
        <ButtonDigit className="bg-gray-100" dispatch={dispatch} digit="8" />
        <ButtonDigit className="bg-gray-100" dispatch={dispatch} digit="9" />
        <ButtonOperation
          className="bg-gray-100"
          dispatch={dispatch}
          operation="+"
        />
        <ButtonDigit className="bg-gray-100" dispatch={dispatch} digit="." />
        <ButtonDigit className="bg-gray-100" dispatch={dispatch} digit="0" />
        <button className="col-span-2 bg-gray-100">=</button>
      </div>
    </div>
  );
}

export default App;
