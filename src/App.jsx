import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box'

function App() {

  return (
    <>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant = "h1" mt = {2}>こんにちは</Typography>
      <HomeIcon />
      <Box color="text.primary" clone>
        <Button />
        <Typography variant = "h1">あいうえお</Typography>
        <Typography variant = "h2">かきくけこ</Typography>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Box>
    </>
  )
}

export default App
