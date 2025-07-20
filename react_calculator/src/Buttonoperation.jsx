import { actions } from "./App";
export default function ButtonOperation({ dispatch, operation }) {
  return (
    <button
      onClick={() =>
        dispatch({ type: actions.choose_operation, payload: { operation } })
      }
    >
      {digit}
    </button>
  );
}
