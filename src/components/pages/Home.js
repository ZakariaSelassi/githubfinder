import React from 'react'
import {Typography} from '@mui/material'
import UsersData from '../users/UsersData' 
import UserSearch from '../users/UserSearch'
const {REACT_APP_GITHUB_TOKEN} = process.env
const Home = () => {
    console.log(`${REACT_APP_GITHUB_TOKEN}`)
    return (
        <div>
          <UserSearch/>
          <UsersData/>
        </div>
    )
}

export default Home
