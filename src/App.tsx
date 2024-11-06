import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/layout";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <div className="App">
      {/* <Layout /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
