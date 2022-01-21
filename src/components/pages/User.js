import {FaCodepen,FaStore,FaUserFriends,FaUsers,FaArrowAltCircleLeft,FaFolder,FaLocationArrow,FaAddressBook} from 'react-icons/fa'
import React,{useEffect,useContext} from 'react'
import GithubContext from '../../context/GithubContext'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import Spinner from "../spinner/Spinner"
import {Box,Card,CardActions,CardHeader, CardContent,Button,Typography, CardMedia,Avatar,Badge} from '@mui/material'
import UserRepo from '../users/UserRepo'
const User = ({}) => {
  const {getUser,user,loading,getRepo,repos} = useContext(GithubContext)
  const params = useParams()
  const {id,name,company,type,avatar_url,location,bio,blog,login,html_url,followers,following, hireable,public_repos} = user
  console.log(repos)
  useEffect(() => {
      getUser(params.login)
      getRepo(params.login)
  }, [])


  if(loading){
    return <Spinner/>
  }
  return (
        <div>
          <Typography component='h1' style={{padding:'1rem',width:'10%',marginLeft:'3.5rem'}}>
            <Link to="/" style={{display:'flex',alignItems:'center',color:'white',border:'1px solid white',padding:'0.5rem',borderRadius:'1rem',textAlign:'center'}}> <FaArrowAltCircleLeft ></FaArrowAltCircleLeft></Link>
          </Typography>
          <div style={{width:'100%',display:'flex',justifyContent:'space-around'}}>
           <Card style={{backgroundColor:'rgb(10, 25, 41)',color:'white'}}>
                
                <CardHeader
                    avatar={
                      <Avatar  aria-label="recipe">
                      {}
                      </Avatar>
                    }
                    title={name}
                    subheader={<p style={{color:"white"}}>  {company}</p>}/>

                 
            
            {
              location && blog && (
                    <div style={{display:'flex' }}>
                      <CardHeader  title="location" subheader={<p style={{color:"white"}}> <FaLocationArrow></FaLocationArrow>{location}</p>}/>
                      <CardHeader  title="blog" subheader={<p style={{color:"white"}}>  {blog}</p>}/>
                    </div>
                    
              )
            }
            <Card style={{backgroundColor:'rgb(10, 25, 41)',display:"flex",color:"white"}}>
                <CardHeader title="followers" subheader={<p style={{color:"white"}}> <FaUserFriends></FaUserFriends> {followers}</p>}/>
                <CardHeader title="following" subheader={<p style={{color:"white"}}> <FaUsers></FaUsers> {following}</p>}/>
                <CardHeader title="Repository" subheader={<p style={{color:"white"}}> <FaFolder></FaFolder> {public_repos}</p>}/>   
            </Card>
           <CardMedia
           component="img"
           style={{width:'100%',maxWidth:'400px',height:'auto',margin:'auto'}}
           image={avatar_url}
           alt="avatar from github"
           />
           <CardContent>
                    <div style={{display:"flex",margin:'1rem'}}> 
                    <div><Badge badgeContent={type} color="primary"></Badge></div>
                    { hireable && (
                      <div style={{paddingLeft:'3rem'}}>
                      
                       
                          <Badge badgeContent="hireable" color="success"></Badge>
                        
                       </div>
                      )}
                      <div style={{paddingLeft:'3rem'}}>
                      <a href={html_url} style={{color:'white',border:'1px solid white',padding:'0.5rem',borderRadius:'1rem'}}> View Profil </a>
                      </div>
                    </div>
                    <Typography>
                      {bio}
                    </Typography>
                   
           </CardContent>
           </Card>
            <UserRepo repos={repos}/>
           </div>
        </div>
    )
}

export default User
