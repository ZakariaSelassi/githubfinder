import React from 'react'
import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {Typography} from '@mui/material'
const NotFound = () => {
    return (
        <div style={{padding:'6rem'}}>
           <Typography variant="h1" style={{fontSize:'3rem'}}>
               Oops! Something went wrong.
            </Typography>
            <Typography variant="p" style={{textAlign:'center',margin:'auto',display:"block"}}>
                404 - Page not found.
            </Typography>
            <div style={{textAlign:'center',padding:'1rem'}}>
                <Link to="/" >
                    <FaHome/>
                     Return to Home
                </Link>
            </div>
           
        </div>
    )
}

export default NotFound
