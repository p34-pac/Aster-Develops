/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import './ListImages.css'
import { useDispatch } from 'react-redux'
import { setHeroContent } from '../../Redux/ReducersAction'
function ListImages() {
    const [images, setImages] = useState([])
    const imgLst = useRef()    
    const dispatch = useDispatch()

    useEffect(() => {
      fetch('http://localhost:3000/list-images')
      .then(res => res.json())
      .then(image => setImages(image))
    }, [])

    useEffect(() => {
        console.log(images);
      }, [images])
      useEffect(()=>{
        const main = "Your Image Library"
        const sub = "Organize and manage your visuals."
        dispatch(setHeroContent({main, sub}))
    }, [])
    
function removeDetails(except){
    if(imgLst.current){
        for (const key in imgLst.current.children) {
            if (Object.hasOwnProperty.call(imgLst.current.children, key)) {
                const img = imgLst.current.children[key];
                if(img.className !== except){
                    try{
                        img.children[0].removeAttribute("open")
                    }catch(err){
                        return
                    }
                }
                
            }
        }
    }
}





  return (
    <div className='ListImages'>
        <h1>Image Folder</h1>
        <ul ref={imgLst}>
            {
                images.map((item, index)=>{
                    return <li key={index} className={item} onClick={()=>removeDetails(item)}>
                        <details>
                            <summary>
                                <img src={`http://localhost:3000/images/${item}`} alt={item} />
                                <div className="actions">
                                    <span>Open</span>
                                    <span>Download</span>
                                </div>
                            </summary>
                        </details>
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default ListImages