import { ToastContainer } from "react-toastify";
import "./App.css";
import { List } from "./employee/list";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <List />
      <ToastContainer theme="dark" autoClose={2000} />
    </div>
  );
}

export default App;
