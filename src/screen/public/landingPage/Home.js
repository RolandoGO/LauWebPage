import React, {useContext} from 'react'
import "./homeStyle.css"
import { Carousel } from 'react-bootstrap'
import {PictureContext} from '../../../context/picturesContext'


export default function Home() {

    const pictures = useContext(PictureContext)
    let slideShowImg=[]
    

    if(pictures.length>0){
        
        slideShowImg = (pictures.slice(0,3).map(ele=>ele))

        
    }


    return (
        <div className="home">
           <Carousel className="myCarousel">
              {slideShowImg.map(ele=>{
                  return(
                    <Carousel.Item className="carouselItem" interval={2000} key ={ele.id}>
                        <img src={ele.picture.url} className="myImg" alt="..some image"></img>
                    </Carousel.Item>
                  )
              })}

               
           </Carousel>
            
        </div>
    )
}
