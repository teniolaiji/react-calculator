import { ACTIONS } from "./App";
export default function ButtonO({ dispatch, operation }) {
  return (
    <button
      className="bg-gray-100 py-2 px-4 rounded"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
}
