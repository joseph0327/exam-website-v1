import React from 'react'

const Register = () => {
    return (
        <div className="container-register">
                <div>
                    <label className="close-register" >CLOSE</label>
                </div>
           <div className ="wrapper-register">
                <div>
                    <h1>REGISTER</h1>
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
                    <div className="txt_field">    
                        <label>Cofirm Password</label> 
                        <input  type="text" required />
                    </div>
                    <div>  
                        <input type="submit" value="REGISTER"/>
                        <div className="reg">You already have account? <a href="/#">LOGIN HERE</a></div>
                    </div>
                </form>   
            </div>        
        </div>
    )
}

export default Register
