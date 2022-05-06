import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants() {
  const [crypto, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Crypto</InputLabel>
        <Select
          color="primary"
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={crypto}
          onChange={handleChange}
          label="Crypto"
        >
          <MenuItem value={20}>Bitcoin</MenuItem>
          <MenuItem value={30}>Ethereum</MenuItem>
          <MenuItem value={40}>Tether</MenuItem>
          <MenuItem value={50}>BNB</MenuItem>
          <MenuItem value={60}>USD Coin</MenuItem>
          <MenuItem value={70}>USD</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Crypto</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={crypto}
          onChange={handleChange}
        >
          <MenuItem value={20}>Bitcoin</MenuItem>
          <MenuItem value={30}>Ethereum</MenuItem>
          <MenuItem value={40}>Tether</MenuItem>
          <MenuItem value={50}>BNB</MenuItem>
          <MenuItem value={60}>USD Coin</MenuItem>
          <MenuItem value={70}>USD</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
