import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/login";
import Navbar from "./components/Navbar/Navbar";
import PrivateComponent from "./components/PrivateComponent/privateComp";
import { Chart, registerables } from 'chart.js';
import Chatbox from "./components/Chatbox/ChatBox";
import WhiteBoard from "./components/WhiteBoard/Whiteboard";
Chart.register(...registerables);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateComponent />}>
          {/* Navbar outside nested routes */}
          <Route path="/dashboard" element={<Navbar />} />
            <Route path="/chatbox" element={<Chatbox/>}/>
            <Route path="/whiteboard" element={<WhiteBoard/>}/>
          </Route>

      </Routes>
    </Router>
  );
}

export default App;
