import React from 'react'
import Logo from '../../images/logo.jpg'
//import '../../App.css'

const Navbar = () => {
   
    return (
        <div>
            <div className="container-nav">
                <div className="wrapper">
                    <div className="logo">
                    <img alt="" src={Logo} />
                    </div>
                    <div className="login">
                        <a href="/#">LOGIN</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
