import { useState } from 'react'
import { storage,db } from '../../../auth/firebase/firebaseConfig'

const typeImageErrorMsj = "tipo de imagen inaceptable, tiene que ser jpg o jpeg"
const lengthImageErrorMsj = "no mas de 5 imagenes al mismo tiempo"


export default function AdminHooks() {

    const [images, setImages] = useState([])
    const [uploadSpiner, setUploadSpiner] = useState(false)
    const [ imageError, setImgError] = useState("")

    function handleImage(e){
        setImgError("")
        
//creating the instance for the array of files that were selected in the input of type file.
        const fileSelect = e.target.files
//if nothing were select get out
        if(!fileSelect) return
        if(fileSelect.length>=5) {
            setImgError(lengthImageErrorMsj)
            setImages([])
            return
        }
        
        else{
            //steps:
        //1- creating array of objects form the object of the input
        
        let imageFileList = []

            for(const file in fileSelect){
                if(typeof fileSelect[file] === typeof {}) {

                    fileSelect[file].id = file
                    
                    imageFileList.push(fileSelect[file])
                    
                }
            }
 //2- finding if there is a file that is not jpg or jpeg
            const validationFileType = imageFileList.find(image=>{
                if(/[\.|\/](jpeg|jpg)$/i.test(image.type)===false) {

                    setImgError(typeImageErrorMsj)
                    setImages([])
                    return true
                }
            })
//3-creating the image array in the state if all the files are validated
            if(!validationFileType){

                const newList = imageFileList.filter(image=>/[\.|\/](jpeg|jpg)$/i.test(image.type))
                setImages(newList)

            }
        }
        
    }


    async function uploadImage(e){
        
        // for every image do the paramsObjlogic below
                
                setUploadSpiner(true)
        
                images.forEach(image=>{
                    const name = image.name
                    const storageRef = storage.ref(name)
                    storageRef.put(image).on("state_change", snap=> {
                        
        
                    },
                    err=>alert(`upload error whit.. err: ${err}`),
                    async ()=>{
                        setUploadSpiner(false)

                        
                        
                        const url = await storageRef.getDownloadURL()
                        
                        db.collection("pictures").add({url})
                        
                        
                    }
                    
                    )
        
                   
        
                    
                })

                setImages([])
        
               
        
                
                
        
            }
        
    return {
        images,
        uploadSpiner,
        imageError,
        handleImage,
        uploadImage
    }
       
    
}
