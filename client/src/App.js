import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/login";
import Navbar from "./components/Navbar/Navbar";
import PrivateComponent from "./components/privateComp";
import { Chart, registerables } from 'chart.js';
import Chatbox from "./components/Chatbox/ChatBox";
// import Sidenav from "./components/sidenav";
Chart.register(...registerables);


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateComponent />}>
          {/* <Route path="/dashboard" element={<Sidenav />} /> */}
          <Route path="/dashboard" element={<Navbar />} />
        </Route>
        <Route path="/chatbox" element={<Chatbox/>}/>
      </Routes>
    </Router>
  );
}
export default App;
