import React from 'react'
import PropTypes from 'prop-types'
import {Box,Card,CardActions, CardContent,Button,Typography, CardMedia} from '@mui/material'
import { Link } from 'react-router-dom'
const UsersItem = ({users:{login , avatar_url}}) => {
    return (
        <Card sx={{ minWidth: 275 }} style={{display:'flex',margin:'1rem'}} >
            <CardContent>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignContent:'center'}}>
                <CardMedia
                component="img"
                height="50"    
                image={avatar_url}
                alt="profil"
                style={{width:'50px',borderRadius:'50%',margin:'auto'}}
                />
                <div style={{display:'flex',flexDirection:'column',alignItems:'center',padding:'1rem'}}>
                    <Typography color="black" >
                            {login}
                    </Typography>
                        <Link to={`/user/${login}`}>
                            View Profil
                        </Link>
                </div>
            </div>
        </CardContent>
      </Card>
    )
}

UsersItem.propTypes = {
    users: PropTypes.object.isRequired,
}
export default UsersItem
