import React from 'react'
import { BrowserRouter ,Route,Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import { Notes, Sidebar } from './'
import DeleteNote from './Delete/DeleteNote'
import DeleteNotes from './Delete/DeleteNotes'
import Archive from './Archive/Archive'
import Archives from './Archive/Archives'
const Home = () => {
  return (
    <Box style={{ display: 'flex', width: '100%' }}>
            <BrowserRouter>
                <Sidebar />
                <Routes>        
                <Route path='/' element={<Notes />} />
                    <Route path='/archive' element={<Archives />} />
                    <Route path='/delete' element={<DeleteNotes />} />
                </Routes>
            </BrowserRouter>
         </Box>
  )
}

export default Home