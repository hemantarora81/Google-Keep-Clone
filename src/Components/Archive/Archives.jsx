// import { Box ,Grid} from '@mui/material'
// import { styled } from '@mui/material/styles';
// import React,{useContext} from 'react'
// import { DataContext } from '../../Context/DataProvider';
// import Archive from './Archive';
// const Archives = () => {
//     const {archiveNotes} = useContext(DataContext)
//     const DrawerHeader = styled('div')(({ theme }) => ({
  
//         // necessary for content to be below app bar
//         ...theme.mixins.toolbar,
//       }));
      
//   return (
//       <Box sx={{ display:'flex'}}>
//           <Box component="main" sx={{ flexGrow: 1, p: 3}}>
//               <DrawerHeader />
//                   <Grid container sx={{ marginTop: 10 }}>
//                       {archiveNotes.map(archive => (
//                           <Grid item>
//                               <Archive archive={archive} />
//                           </Grid>
                  
//                       ))}
//                   </Grid>
                  
//               </Box>
//        </Box>
//   )
// }

// export default Archives
import { useContext } from 'react';

import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import { DataContext } from '../../Context/DataProvider';

//components
import Archive from './Archive';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const Archives = () => {

    const { archiveNotes } = useContext(DataContext);

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />
                <Grid container>
                    {
                        archiveNotes.map(archive => (
                            <Grid item>
                                <Archive archive={archive} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default Archives;