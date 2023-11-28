import React from "react";
import { Button } from "@mui/material";
import {Link} from 'react-router-dom';

const Buttons = ({handleLogout}) => {
  return (
    <div style={{ marginLeft: "auto", display: "flex", gap: 15 }}>
      <Link
        to="/whiteboard"
        className="inline-block px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Open Whiteboard
      </Link>

      <Link
        to="/chatbox"
        className="inline-block px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Ask GPT 3.5
      </Link>
      <Button variant="outlined" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Buttons;
