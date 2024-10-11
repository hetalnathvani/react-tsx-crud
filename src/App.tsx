import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/layout";

function App() {
  return (
    <div className="App">
      <Layout />
      <ToastContainer theme="dark" autoClose={2000} />
    </div>
  );
}

export default App;
