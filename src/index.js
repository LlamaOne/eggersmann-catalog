import React from "react";
import DropdownTreeSelect from "react-dropdown-tree-select";
import { Grid, Card, CardContent } from '@mui/material';
import "./index.css";
import Catalog from "./Catalog";
import ReactDOM from "react-dom/client";



const App = () => {
    return (
      <Catalog />
    );
  };


ReactDOM.createRoot(document.getElementById("root")).render(<App />,);