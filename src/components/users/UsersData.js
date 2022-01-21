import React,{useContext,useState} from 'react'
import Spinner from '../spinner/Spinner'
import UsersItem from './UsersItem'
import GithubContext from '../../context/GithubContext'
import {Pagination} from '@mui/material'
 import ReactPaginate from 'react-paginate'
const {REACT_APP_GITHUB_TOKEN,REACT_APP_GITHUB_URL} = process.env

const UsersData = () => {

    const {users,loading} = useContext(GithubContext)


    const [pageNumber,setPageNumber] = useState(0)

    const usersPerPage = 6

    const pagesVisited = pageNumber * usersPerPage

    const displayUsers = users.slice(pagesVisited,pagesVisited + usersPerPage).map((item,index) => {
        return( 
            <UsersItem users={item} key={index}/>
         )
    })

    const pageCount = Math.ceil(parseFloat(users.length / usersPerPage))
    
    const handlePageChange = (event) => {
        setPageNumber(event.selected)
    }
    if(!loading){
            return (
               <>
             <div  style={{display:'grid',
             gridTemplateColumns:'auto auto auto ',gridTemplateRows:'auto'}}> 
                {
                    displayUsers
                    
                } 
            </div>
                <div style={{width:'50%',margin:'auto'}}> 
                    <ReactPaginate 
                        previousLabel='Previous'
                        nextLabel="Next"
                        pageCount={pageCount}
                        onPageChange={handlePageChange}
                        containerClassName='paginationBtn'
                        previousLinkClassName='previousBtn'
                        nextLinkClassName='nextBtn'
                        activeClass={"activePagination"}
                        />
                </div>
            </>
                                
            )
    }else{
        
        return (
            <Spinner/>
        )
        /* Spinner component */
    }
   
}

export default UsersData
