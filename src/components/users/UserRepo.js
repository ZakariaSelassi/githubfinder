import React from 'react'
import PropTypes from 'prop-types'
import {Box,Card,CardActions,CardHeader, CardContent,Button,Typography, CardMedia,Avatar,Badge} from '@mui/material'
const UserRepo = ({repos,title}) => {
    return (
        <div>
            <Typography variant="h4" style={{color:'white',margin:'1rem'}}>{title} - {repos.length}</Typography>
            {
                repos.map(repo => (
                    <div>
                        <Card style={{backgroundColor:'rgb(10, 25, 41)',color:'white',border:'1px solid white', margin:'1rem'}}>
                            <CardHeader
                            style={{padding:'2rem'}}
                         title={repo.name}
                                subheader={<div style={{color:"white"}}>  {repo.description}</div>}/>
                    </Card>
                    </div>

                ))}
        </div>
    )
}

UserRepo.defaultProps = {
    title: 'Latest Repos',
}
UserRepo.propTypes = {
    repos: PropTypes.array.isRequired,
}

export default UserRepo
