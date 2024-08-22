/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import './GetImageUrl.css'
import { useDispatch } from 'react-redux'
import { setHeroContent } from '../../Redux/ReducersAction'

function GetImageUrl() {
    const [image, setImage] = useState("")
    const [alert, setAlert] = useState("")
    const imageFIle = useRef()
    const dispatch = useDispatch()


    useEffect(() => {
      if(alert!==""){
        console.log(alert);
      }
    }, [alert])
    function setAlerted(alerted){
        setAlert("copied to clipBoard")
        setTimeout(() => {
            setAlert("")
        }, 3000);
    }
    useEffect(()=>{
        const main = "Thumbnail Preview"
        const sub = "Visualize images at a glance."
        dispatch(setHeroContent({main, sub}))
    }, [])
    

    const handleImageChange = async (event) => {

    
        const file = event.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload =  () => {
                setImage(reader.result)
            };
            reader.readAsDataURL(file);
        }
    };

    async function copyToClipBoard(content) {
        // Modern clipboard API
        if (navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(content);
                return true;  // Text was successfully copied
            } catch (error) {
                console.error('Failed to copy text with Clipboard API:', error.message || error);
                return false; // Failed to copy text
            }
        } 
        // Fallback to older method
        else {
            const textarea = document.createElement('textarea');
            textarea.value = content;
            document.body.appendChild(textarea);
            textarea.select();
            try {
                const successful = document.execCommand('copy');
                document.body.removeChild(textarea);
                setAlerted("copied to clipBoard")
                return successful;
            } catch (error) {
                console.error('Failed to copy text with execCommand:', error.message || error);
                document.body.removeChild(textarea);
                return false; // Failed to copy text
            }
        }
    }
    
    
  return (
    <div className='getUrl'>
        <label htmlFor="imageThumbnail">
            <b className="addImageThumbnail"></b>
            <button onClick={()=>{
                imageFIle.current.click()
            }}>{image!==""?"Choose another Image":"Choose Image"}</button>
            <input ref={imageFIle} type='file' hidden onChange={(e)=> handleImageChange(e)}/>
        </label>

        {
            image!=""?
                <>
                    <h2>&nbsp;&nbsp;&nbsp;Image Url as Text &nbsp;&nbsp;&nbsp;</h2>
                    <p>
                        <img src={image} alt="image" />
                    </p>

                    <span
                        onClick={()=> {
                            copyToClipBoard(image)
                            
                        }}
                    >copy image as text</span>
                    {
                        alert!==""?<span className='alert'>{alert}</span>:null
                    }
                </>
            :null
        }
    </div>
  )
}

export default GetImageUrl