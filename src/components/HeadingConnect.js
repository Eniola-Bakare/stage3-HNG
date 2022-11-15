import { Button } from '@mui/material'
import { Stack } from '@mui/system'
import TuneIcon from '@mui/icons-material/Tune';
import React from 'react'

const HeadingConnect = () => {
  return (
    <Stack >
      <ul>
        <li>Resturant</li>
        <li>Cottage</li>
        <li>Castle</li>
        <li>Fantast city</li>
        <li>Beach</li>
        <li>Carbins</li>
        <li>Off-grid</li>
        <li>Farm</li>
      </ul>
      <Button variant='contained' endIcon={TuneIcon}>Location</Button>
    </Stack>
  )
}

export default HeadingConnect