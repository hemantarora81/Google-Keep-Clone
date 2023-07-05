import React from 'react'
import { LightbulbOutlined } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'

const EmptyNotes = () => {
  return (
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'20vh'}}>
          <LightbulbOutlined sx={{fontSize:'120px',color:'#f5f5f5',}}/>
          <Typography sx={{color:'#80868b',fontSize:'22px'}}>
              Notes you add appear here
          </Typography>
</Box>
    )
}

export default EmptyNotes