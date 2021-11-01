import React, { useState,  createContext, useEffect} from 'react'
import {db} from "../auth/firebase/firebaseConfig"

export const PictureContext = createContext()

export default function PicturesContext(props) {

    const [data, setData] = useState([])
    

  useEffect(() => {
    
    //on the first render of the app and in the case of change, it search the data.

    db.collection("pictures").onSnapshot((snapshot) => {
      const snapshotList = []

      snapshot.forEach(picture => snapshotList.push({picture: picture.data(), id:picture.id}))

      setData(snapshotList)
    })

    



  }, [])

    return (
        <>
        <PictureContext.Provider value ={data} >
            {props.children}
        </PictureContext.Provider>
        </>
    )
}
