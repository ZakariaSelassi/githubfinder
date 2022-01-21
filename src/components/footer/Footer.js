import React from 'react'

const Footer = () => {
    
    const footerYear = new Date().getFullYear()
    return (
        <footer style={{color:"white",padding:'10px', background:'rgb(10, 25, 41)',textAlign:'center'}}>
            
            <p>Copyright &copy; {footerYear} All rights reserve</p>
           
        </footer>
    )
}

export default Footer
