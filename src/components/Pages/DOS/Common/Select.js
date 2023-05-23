import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectVariants() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl 
        sx={{ 
          minWidth: 150,
        }}
      >
        <Select
          value={age}
          onChange={handleChange}
          sx={{
            minHeight: 0,
            height: 30
          }}
        >
          <MenuItem value={10}>One</MenuItem>
          <MenuItem value={20}>Two</MenuItem>
          <MenuItem value={30}>Three</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
