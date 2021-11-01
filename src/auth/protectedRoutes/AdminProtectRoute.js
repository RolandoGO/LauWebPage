import React, { useEffect, useState } from 'react'
import { Route } from "react-router-dom"
import AuthService from '../authService'

export default function AdminProtectRoute({component:Component, ...rest}) {
    
    const {logInStatus} = AuthService()
    const [renderComponent, setRenderComp] = useState()
    
    const handleAdminStatus = async ()=>{ 
        
        const res = await logInStatus().then(res=>res).catch(res=>res)
        
       if(res){
           setRenderComp(<Route render={()=><Component></Component>}/>) 
       }
       else{
        setRenderComp(<Route render={()=><h2>Not Admin log In</h2>}/>)
       }
   }

    useEffect(()=>{
        handleAdminStatus()
    },[])
    

    return (
        <div>
            {renderComponent}
        </div>
    )
}
