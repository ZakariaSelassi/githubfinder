import * as React from 'react';
import {Box} from '@mui/system';
import {AppBar,Toolbar,IconButton,Typography,Button,} from '@mui/material';
import { Link } from 'react-router-dom';
import './navbar.css'
const Navbar = ({title}) => {
    return (
        <Box >
        <AppBar position="static" style={{background:'#0A1929'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>           
           <Link to='/' style={{textDecoration:'none',color:'white'}}>
            {title}
           </Link>
          </Typography>
            <Box style={{display:'flex',padding:'1rem',marginRight:'1rem',}}>
                <Link to='/' style={{textDecoration:'none',color:'white',marginRight:'1rem',padding:'1rem'}}>HOME</Link>
                <Link to='/about' style={{textDecoration:'none',color:'white',padding:'1rem'}}>ABOUT</Link>        
            </Box>
        </Toolbar>
      </AppBar>
        </Box>
    )
}

Navbar.defaultProps = {
    title: 'Github',
}
export default Navbar
