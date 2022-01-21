import { createContext ,useState} from "react";
import Snackbar from '@mui/material/Snackbar'
import {Alert} from '@mui/material'
const AlertContext = createContext();


export const AlertProvider = ({children}) => {
    
    const [open, setOpen] = useState(false);
    const [alert , setAlert] = useState({})

    const openSuccessSnackbar = (message,severity) => {
        setOpen(true)
        setAlert({message,severity:severity})
    }
    const  openErrorSnackbar = (message,severity) => {
        setOpen(true)
        setAlert({message,severity:severity})
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      
    }
    return(
        <AlertContext.Provider value={{
            openSuccessSnackbar,
            openErrorSnackbar
        }}>
            {children}
            <Snackbar
            open={open}
            autoHideDuration={1000}
            onClose={handleClose}
            >
                <Alert severity={alert.severity} onClose={handleClose}>
                    {alert.message}
                </Alert>
            </Snackbar>
        </AlertContext.Provider>
        )
}

export default AlertContext;