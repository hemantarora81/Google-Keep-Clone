    import React from 'react'
    import MenuIcon from '@mui/icons-material/Menu';
    import Toolbar from '@mui/material/Toolbar';
    import Typography from '@mui/material/Typography';
    import IconButton from '@mui/material/IconButton';
    import { styled } from '@mui/material/styles';
    import MuiAppBar from '@mui/material/AppBar';
    const AppBar = styled(MuiAppBar)`
    z-index: 1201;
    background: #fff;
    height:70px;
    box-shadow:inset 0-1px 0 0 #dadce0
    `

    const Header = ({handleDrawer,open}) => {
        const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';
        return (
            <AppBar  open={open}>
                <Toolbar>
                    <IconButton
                        onClick={handleDrawer}
                        edge="start" //placement of icon
                        sx={{    marginRight: '20px',    }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src={ logo}  alt='logo' width="30px"/>
                    <Typography sx={{color:"#5F6368",fontSize:'24px',marginLeft:'25px'}}>
                        Keep 
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
    export default Header