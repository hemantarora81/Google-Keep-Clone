import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import {LightbulbOutlined, ArchiveOutlined,DeleteOutlineOutlined} from '@mui/icons-material';
const NewList = ({ open }) => {
  const navList = [
    { id: 1, name: 'Notes', icon: <LightbulbOutlined />, route: '/' },
    { id: 2, name: 'Archives', icon: <ArchiveOutlined />, route: '/archive' },
    { id: 3, name: 'Trash', icon: <DeleteOutlineOutlined />, route: '/delete' },
]

return (
    <List>
    {
        navList.map(list => (
            <ListItem button key={list.id}>
                <Link to={`${list.route}`} style={{ textDecoration: 'none', display: 'flex', color: 'inherit'}}>
                    <ListItemIcon style={{ alignItems: 'center'}}>
                        {list.icon}
                    </ListItemIcon>
                    <ListItemText primary={list.name} />
                </Link>
            </ListItem>
        ))
    }
    </List>
)
}

export default NewList