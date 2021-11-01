import React, { useContext } from 'react'
import {PictureContext} from "../../../context/picturesContext"
import "./pictures.css"

export default function Pictures() {

  const pictures = useContext(PictureContext)



  return (
    <div className="row">
      {pictures.map(image => {
        return (
          <div className="col-6-md" key={image.id} style={{height:"300px", width:"300px", margin:"5px"}}>
           
           
            <img className="myImage" src={image.picture.url} alt="pictures from Lau"></img>
           
          </div>
        )
      })} 

          

    </div>
  )
}
