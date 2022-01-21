import {createContext,useReducer} from 'react';
import githubReducer from './GithubReducer';
import axios from 'axios'
const GithubContext = createContext()
const {REACT_APP_GITHUB_TOKEN,REACT_APP_GITHUB_URL} = process.env


export const GithubProvider = ({children}) => {

    const initialState = {
        users:[],
        user:{},
        repos:[],
        loading: false,
    }

    const [state,dispatch] = useReducer(githubReducer,initialState)
    const searchUsers = async (text) => {
        setLoading()
        const params = new URLSearchParams({
            q:text
        })
        const response = await fetch(`${REACT_APP_GITHUB_URL}/search/users?${params}`)
        const {items} = await response.json()
        dispatch({
            type: 'GET_USERS',
            payload: items
        })
    }
    
    const getUser = async (login) => {
        setLoading()

        const response = await fetch(`${REACT_APP_GITHUB_URL}/users/${login}`)

        if(response.status === 404){
            window.location = '/notFound'
        }else{
            
            const data = await response.json()
            dispatch({
                type: 'GET_USER',
                payload: data
            })
        }
    }
    
    const getRepo = async (login) => {
        setLoading()
        const params = new URLSearchParams({
            sort: 'created',
            per_page:5,
            direction:'desc',
        })
        const response = await fetch(`${REACT_APP_GITHUB_URL}/users/${login}/repos?${params}`)
        const data= await response.json()
        dispatch({
            type: 'GET_REPO',
            payload: data
        })
    }

    const clearUser = () => dispatch({type: 'CLEAR_USERS'})
    const setLoading = () =>  dispatch({ type: 'SET_LOADING'})
    console.log(state.repos)
    return (
        <GithubContext.Provider value={{
            users:state.users,
            loading:state.loading,
            user:state.user,
            repos:state.repos,
            searchUsers,
            clearUser,
            getUser,
            getRepo,
        }}>
            {children}
        </GithubContext.Provider>
        )
}

export default GithubContext;