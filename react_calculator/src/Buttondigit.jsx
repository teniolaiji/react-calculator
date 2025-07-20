import { actions } from "./App";
export default function ButtonDigit({ dispatch, digit }) {
  return (
    <button
      onClick={() =>
        dispatch({ type: actions.choose_digit, payload: { digit } })
      }
    >
      {digit}
    </button>
  );
}
