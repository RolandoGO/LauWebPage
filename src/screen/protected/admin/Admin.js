import React from 'react'
import AuthService from '../../../auth/authService'
import AdminHooks from './AdminHooks.js'

import AdminPictures from './AdminPictures'
import "./admin.css"




export default function Admin() {


    const {handleLogOut} = AuthService()

    const {images,uploadSpiner,imageError,handleImage,uploadImage} = AdminHooks()
    

    

    const btnFlag = (images.length>0 && imageError.length===0 && !uploadSpiner)? false:true

    let render;

    if(!uploadSpiner){
       render =  <form onSubmit={(e)=>uploadImage(e)} className="imageForm">
            <input type="file" multiple onChange={(e)=>handleImage(e)}></input>
            <button  className="btn btn-sm btn-primary m-2" disabled={btnFlag} type="submit">add photo</button>
            <strong>{imageError}</strong>
            </form>
    } 
    else{
        render = <div className="spinner-border text-secondary" role="status" style={{height:"80px", width:"80px"}}></div>
    }


   

    return (
        <div className="adminStyle">
            <button className="btn btn-sm btn-primary m-2" onClick={handleLogOut}>Log Out</button>
            {render}
            <br/>
            <AdminPictures/>

        </div>
    )
}
