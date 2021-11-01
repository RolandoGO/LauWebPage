import React, {useEffect, useState} from 'react'
import {Route} from "react-router-dom"
import AuthService from '../authService'

export default function LoginProtectedRoute({component:Component, ...rest}) {

    const {logInStatus} = AuthService()
    const [renderComponent, setRenderComp] = useState()
    
    const handleLogInStatus = async ()=>{ 
        
        const res = await logInStatus().then(res=>res).catch(res=>res)
        
       if(!res){
           setRenderComp(<Route render={()=><Component></Component>}/>) 
       }
       else{
        setRenderComp(<Route render={()=><h2>You Are all ready log in</h2>}/>)
       }
   }

    useEffect(()=>{
        handleLogInStatus()
    },[])

    return (
        <div>

            {renderComponent}
        </div>
    )
}
