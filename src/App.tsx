import { ToastContainer } from "react-toastify";
import "./App.css";
import { EmployeeList } from "./view/employee";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <EmployeeList />
      <ToastContainer theme="dark" autoClose={2000} />
    </div>
  );
}

export default App;
