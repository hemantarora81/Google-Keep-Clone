import { Box, Grid } from '@mui/material'
import { DragDropContext,Droppable,Draggable } from 'react-beautiful-dnd';
import { styled } from '@mui/material/styles';
import React,{useContext} from 'react'
import {Form,Note,EmptyNotes} from '../'
import { DataContext } from '../../Context/DataProvider';
import {reorder} from '../../utils/commonutils'
const Notes = () => {
    const {notes,setNotes} = useContext(DataContext)
    const DrawerHeader = styled('div')(({ theme }) => ({
  
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));
  
    const onDragEnd = (result) => {
        if (!result.destination) 
          return;
    
        const items = reorder(notes, result.source.index, result.destination.index);    
        setNotes(items);
    }
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
    <Box sx={{ p: 3, width: '100%' }}>
        <DrawerHeader />
        <Form />
        { notes.length > 0 ? 
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <Grid container style={{ marginTop: 16}}
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                        {
                            notes.map((note, index) => (
                                <Draggable key={note.id} draggableId={note.id} index={index}>
                                    {(provided, snapshot) => (
                                        <Grid ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            item
                                        >
                                            <Note note={note} />
                                        </Grid>
                                    )}
                                </Draggable >
                            ))
                        }
                        </Grid>
                    )}
                </Droppable >
            </DragDropContext>
        : <EmptyNotes /> }
    </Box>
</Box>
  )
}

export default Notes