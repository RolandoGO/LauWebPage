import React, {useContext, useEffect} from 'react'
import { PictureContext } from '../../../context/picturesContext'
import {db,storage} from "../../../auth/firebase/firebaseConfig"
import "./admin.css"

export default function AdminPictures() {

    const pictures = useContext(PictureContext)

    

    async function deletePicture(url,id){
        //deleting from storage in firebase
      storage.refFromURL(url).delete().then(d=>console.log("exitos")).catch(err=>console.log(err))
      //deleting from firestore in firebase
      db.collection("pictures").doc(id).delete()

       
    }

    

    
    return (
        <div className="row">
          {pictures.map(image => {
            return (
              <div className="col-6-md" key={image.id} style={{height:"350px", width:"300px", margin:"5px"}}>
               
               <button className="btn btn-sm btn-warning " onClick={()=>deletePicture(image.picture.url,image.id)}>X</button>
                <img className="myImage" src={image.picture.url} alt="picture from Lau"></img>
               
              </div>
            )
          })} 
    
              
     
        </div>
      )
}
