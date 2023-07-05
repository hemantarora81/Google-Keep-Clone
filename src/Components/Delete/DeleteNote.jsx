// import {  Card ,CardActions,CardContent, Typography} from '@mui/material'
// import React from 'react'
// import { RestoreFromTrashOutlined ,DeleteForeverOutlined} from '@mui/icons-material';
// import { useContext } from 'react';
// import { DataContext } from '../../Context/DataProvider';

// const DeleteNote = ({ note }) => {
//     const { notes, setNotes, archiveNotes, setArchiveNotes, deleteNotes, setDeleteNotes } = useContext(DataContext);
     
//     const restoreNote = (note) => {
//      const   updatedNotes = deleteNotes.filter(data => data.id !== note.id)
//         setDeleteNotes(updatedNotes);
//         setDeleteNotes(prevArr => [note, ...prevArr]);
//         // console.log(updatedNotes);
//     }
//     const deleteNote = (note) => {
//         console.log(note)
//         const updatedNotes = deleteNotes.filter(data => data.id !== deleteNote.id);
//         setDeleteNotes(updatedNotes);
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
//               <DeleteForeverOutlined sx={{cursor:'pointer'}} fontSize="small" onClick={()=> deleteNote(note) } />
              
//               <RestoreFromTrashOutlined fontSize='small' sx={{ marginLeft: 'auto',cursor:'pointer' }}
//                   onClick={()=>restoreNote(note)}
//               />
//           </CardActions>
//    </Card>
//   )
// }

// export default DeleteNote;
import { useContext } from 'react';

import { Card, CardContent, CardActions, Typography,Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { RestoreFromTrashOutlined as Restore, DeleteForeverOutlined as Delete } from '@mui/icons-material';
import { DataContext } from '../../Context/DataProvider';

const StyledCard = styled(Card)`
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    width: 240px;
    margin: 8px;
    box-shadow: none;
`

const DeleteNote = ({ deleteNote }) => {

    const { deleteNotes, setNotes, setDeleteNotes } = useContext(DataContext);

    const restoreNote = (deleteNote) => {
        const updatedNotes = deleteNotes.filter(data => data.id !== deleteNote.id);
        setDeleteNotes(updatedNotes);
        setNotes(prevArr => [deleteNote, ...prevArr]);
    }

    const removeNote = (deleteNote) => {
        const updatedNotes = deleteNotes.filter(data => data.id !== deleteNote.id);
        setDeleteNotes(updatedNotes);
    }

    return (
        <StyledCard>
                <CardContent>
                    <Typography>{deleteNote.heading}</Typography>
                    <Typography>{deleteNote.text}</Typography>
                </CardContent>
            <CardActions>
                <Tooltip title="Delete">
                <Delete 
                        fontSize="small" 
                        style={{ marginLeft: 'auto' }} 
                        onClick={() => removeNote(deleteNote)}
                    />
                </Tooltip>
                <Tooltip title="Restore">
                <Restore 
                        fontSize="small"
                        onClick={() => restoreNote(deleteNote)}
                    />
                   </Tooltip>
                    
                </CardActions>
        </StyledCard>
    )
}

export default DeleteNote;