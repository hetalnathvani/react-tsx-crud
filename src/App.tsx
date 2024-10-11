import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EmployeeList } from "./view/employee";
import { ProjectList } from "./view/projects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/projects" element={<ProjectList />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="dark" autoClose={2000} />
    </div>
  );
}

export default App;
