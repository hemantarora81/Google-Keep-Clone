// import { Box ,Grid} from '@mui/material'
// import { styled } from '@mui/material/styles';
// import React,{useContext} from 'react'
// import { Form, Note, EmptyNodes } from '../'
// import DeleteNote from './DeleteNote'
// import { DataContext } from '../../Context/DataProvider';
// const DeleteNotes = () => {
//     const {deleteNotes} = useContext(DataContext)
//     const DrawerHeader = styled('div')(({ theme }) => ({
  
//         // necessary for content to be below app bar
//         ...theme.mixins.toolbar,
//       }));
      
//   return (
//       <Box sx={{ display:'flex'}}>
//           <Box component="main" sx={{ flexGrow: 1, p: 3}}>
//               <DrawerHeader />
//                   <Grid container sx={{ marginTop: 10 }}>
//                       {deleteNotes.map(note => (
//                           <Grid item>
//                               <DeleteNote note={note} />
//                           </Grid>
                  
//                       ))}
//                   </Grid>
//               </Box>
//        </Box>
//   )
// }

// export default DeleteNotes;

import { useContext } from 'react';

import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import { DataContext } from '../../Context/DataProvider';

//components
import DeleteNote from './DeleteNote';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {

    const { deleteNotes } = useContext(DataContext);

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />
                <Grid container>
                    {
                        deleteNotes.map(deleteNote => (
                            <Grid item>
                                <DeleteNote deleteNote={deleteNote} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default DeleteNotes;