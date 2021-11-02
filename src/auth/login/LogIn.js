import React, { useState } from 'react'
import AuthService from '../authService'
import { useHistory } from 'react-router'
import "./formStyle.css"

const passwordErrorMsj = "entre 5 y 10 caracteres alfanumericos"
const emailErrorMsj = "email debe contener solo caracteres alfanumericos, Ej: xxxxxxx@xxx.xx"
const logInErrorMsj = "ususario o contraseña incorrecta"

export default function LogIn() {

    const {logInService} = AuthService()
    const history = useHistory()

    const [email, setEmail] = useState("")
    const [password, setPassword] =useState("")
    const [emailError, setEmailError]= useState("")
    const [passwordError, setPasswordError] = useState("")
    const [logInError, setLogInError] = useState("")
    const [btnLoader, setBtnLoader] = useState(null)

    const handleValidation = (e)=>{

        setLogInError("")
        const inputType = e.currentTarget.type
        const value = e.currentTarget.value

        const passwordRegex = /^[\w]{5,10}$/
        const emailRegex = /^[\w]+@([a-zA-Z]+\.)[\w]+$/

        


        if(inputType === "password") {

            setPassword(value);
            if(!passwordRegex.test(value)){
                setPasswordError(passwordErrorMsj)
            }
            else setPasswordError("")
            
        }
        
        else {
            setEmail(value);

            if(!emailRegex.test(value)){setEmailError(emailErrorMsj)} 
            else setEmailError("")
           
        }
    }
    
    
    
    
    
    async function handleLogIn(e){

        e.preventDefault()
        setBtnLoader(true)

        const values ={
            email,
            password
        }
        const res = await logInService(values)
        if(!res){
            setLogInError(logInErrorMsj)
            setBtnLoader(null)
        }
        else{
            history.replace("/LauWebPage/admin")
           
        }
       
    }

    const btnFlag = (!emailError && !passwordError && email.length>0 && password.length>0)? false:true

    const btn = (btnLoader)? <div className="spinner-border text-info" role="status"></div> 
    :
    <button type="submit" disabled={btnFlag}  className="btn btn-primary mt-2">Log In</button> 

    return (
        <div>
            
            <form onSubmit={(e)=>handleLogIn(e)} className="logInForm">
            <h2>Admin LogIn Page</h2>
            <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input type="email" value={email} onChange={(e)=> handleValidation(e)} className="form-control" id="email"/>
                {emailError&& <p className="alert alert-danger" role="alert">{emailError}</p>}
            
            </div>
            <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input type="password"  value={password} onChange={(e)=> handleValidation(e)} className="form-control" id="pwd"/>
                {passwordError&& <p className="alert alert-danger" role="alert">{passwordError}</p>}
            </div>
            
            {btn}
            {logInError&& <p>{logInError}</p>}

            </form> 
            
        </div>
    )
}

