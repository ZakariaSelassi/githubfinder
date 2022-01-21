import React,{useState,useContext,useEffect} from 'react'
import GithubContext from '../../context/GithubContext'
import AlertContext from '../../context/AlertContext'
const UserSearch = ({}) => {
    const [text,setText] = useState("")
    const {users,searchUsers,clearUser} = useContext(GithubContext)
    const {openSuccessSnackbar,openErrorSnackbar} = useContext(AlertContext)

    useEffect(() => {
        searchUsers()
    },[])
    const handleTextChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text === ''){
            openErrorSnackbar("Enter something to search ! ")
        }else{
            
           searchUsers(text)
           openSuccessSnackbar("User from github has been fetched ! ")
           setText('')
        }

    }
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
        <form onSubmit={handleSubmit}>
            <div className="searchBar">
                <input 
                value={text}
                onChange={handleTextChange}
                placeholder="search users"/>
                <button type="submit">Search</button>
            </div>
        </form>
            {
            users.length > 0 && (
                <div>
                    <button onClick={clearUser}>clear</button>
                </div>
            )
        } 
        </div>
    )
}

export default UserSearch
