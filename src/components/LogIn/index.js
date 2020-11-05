import React from 'react'

const LogIn = () => {
    return (
        <div className="container-login">
                <div>
                    <label className="close-login" >CLOSE</label>
                </div>
           <div className ="login-wrapper">
                <div>
                    <h1>LOGIN</h1>
                </div>
                <form>
                    <div className="txt_field">
                        <label>Email</label> 
                        <input type="email" required />    
                    </div> 
                    <div className="txt_field">    
                        <label>Password</label> 
                        <input  type="text" required />

                    </div>
                    <div>  
                        <input type="submit" value="LOGIN"/>
                        <div className="reg">No account yet? <a href="/#">REGISTER HERE</a></div>
                    </div>
                </form>   
            </div>        
        </div>
    )
}

export default LogIn
