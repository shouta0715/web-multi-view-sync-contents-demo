import useWebSocket, { ReadyState } from "react-use-websocket";

const url = "ws://localhost:8787";

function App() {
  const { sendMessage, lastMessage, readyState } = useWebSocket(url);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <p>
        これはポート{" "}
        <span className="font-semibold text-green-600">
          {window.location.port}
        </span>{" "}
        で動作しています。WebSocket
      </p>
      {connectionStatus === "Open" && (
        <div className="flex space-x-2">
          <button
            className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => sendMessage("increment")}
            type="button"
          >
            Increment
          </button>
          <button
            className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => sendMessage("decrement")}
            type="button"
          >
            decrement
          </button>
          <button
            className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => sendMessage("reset")}
            type="button"
          >
            Reset
          </button>
        </div>
      )}

      <p>value: {lastMessage?.data ?? 0}</p>
    </div>
  );
}

export default App;
