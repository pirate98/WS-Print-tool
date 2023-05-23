import React, { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Button } from "@mui/material";

export default function App() {
  let [count, setCount] = useState(0);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    count = count - 1;
    setCount(count);
  }
  return (
    <div className="d-flex text-center" 
    style={{height: 30}}
    >
      <Button 
        variant="contained" 
        onClick={incrementCount} 
        sx={{
          background: "#193B68",
          borderRadius: 0,
          minWidth: 0,
          width: 30
        }}
      >
        <AddCircleIcon />
      </Button>
      <input type="input" value={count} className="mx-1 text-center" style={{width: 80}} />
      <Button
        variant="contained"
        onClick={decrementCount}
        sx={{
          background: "#193B68",
          borderRadius: 0,
          minWidth: 0,
          width: 30
        }}
      >
        <RemoveCircleIcon />
      </Button>
    </div>
  );
}
