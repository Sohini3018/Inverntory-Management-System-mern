import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Sidenav from "./components/sidenav";
import PrivateComponent from "./components/privateComp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateComponent />}>
          <Route path="/dashboard" element={<Sidenav />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
