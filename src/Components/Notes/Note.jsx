// import {  Card ,CardActions,CardContent, Typography} from '@mui/material'
// import React from 'react'
// import { ArchiveOutlined ,DeleteOutlineOutlined} from '@mui/icons-material';
// import { useContext } from 'react';
// import { DataContext } from '../../Context/DataProvider';

// const Note = ({ note }) => {
//     const { notes, setNotes, archiveNotes, setArchiveNotes, deleteNotes, setDeleteNotes } = useContext(DataContext);
     
//     const archiveNote = (note) => {
//      const   updatedNotes = notes.filter(data => data.id !== note.id)
//         setNotes(updatedNotes);
//         setArchiveNotes(prevArr => [note, ...prevArr]);
//         console.log(updatedNotes);
//     }
//     const deleteNote = () => {
//         const   updatedNotes = notes.filter(data => data.id !== note.id)
//         setNotes(updatedNotes);
//         setDeleteNotes(prevArr => [note, ...prevArr]);
//         console.log(updatedNotes);
//     }
//   return (
//       <Card sx={{width:'240px',margin:'8px',boxShadow:'none',border:'1px solid #e0e0e0',borderRadius:'8px'}}>
//           <CardContent>
//               <Typography>
//                   {note.heading}
//               </Typography>
//               <Typography>
//                   {note.text}
//               </Typography>
//           </CardContent>
//           <CardActions>
//               <ArchiveOutlined fontSize='small' sx={{ marginLeft: 'auto' }}
//                   onClick={()=>archiveNote(note)}
//               />
//               <DeleteOutlineOutlined fontSize="small"   onClick={()=>deleteNote()}/>
//           </CardActions>
//    </Card>
//   )
// }

// export default Note

import { useContext } from 'react';

import { Card, CardContent, CardActions, Typography,Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';

import { DataContext } from '../../Context/DataProvider';

const StyledCard = styled(Card)`
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    width: 240px;
    margin: 8px;
    box-shadow: none;
`

const Note = ({ note }) => {

    const { notes, setNotes, setArchiveNotes, setDeleteNotes } = useContext(DataContext);

    const archiveNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setArchiveNotes(prevArr => [note, ...prevArr]);
    }

    const deleteNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setDeleteNotes(prevArr => [note, ...prevArr]);
    }

    return (
        <StyledCard>
                <CardContent>
                    <Typography>{note.heading}</Typography>
                    <Typography>{note.text}</Typography>
                </CardContent>
            <CardActions>
            <Tooltip title="Archive" placement="bottom">
                    <Archive sx={{cursor:'pointer', marginLeft: 'auto' }}
                        fontSize="small" 
                        onClick={() => archiveNote(note)}
                    />
                    </Tooltip>
                <Tooltip title="Delete" placement="bottom">
                <Delete 
                    sx={{ cursor:'pointer'}}
                        fontSize="small"
                        onClick={() => deleteNote(note)}
                    />
                </Tooltip>
               
                </CardActions>
        </StyledCard>
    )
}

export default Note;