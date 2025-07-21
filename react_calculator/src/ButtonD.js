import { ACTIONS } from "./App";
export default function ButtonDigit({ dispatch, digit }) {
  return (
    <button
      className="bg-gray-100 py-2 px-4 rounded"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_DIGIT, payload: { digit } })
      }
    >
      {digit}
    </button>
  );
}
