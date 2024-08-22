/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './AddProject.css'
import Modal from '../../Components/Modal/Modal'
import { useRef } from 'react'
import Textarea from '../../Components/Textarea/Textarea'
import { useDispatch } from 'react-redux'
import { setHeroContent } from '../../Redux/ReducersAction'


function ImagePreview({thumbnailImagePreview, thumbnailImages,setThumbnailImages, setImagePreviewModalOpened }){
    const [zoomVal, setZoomVal] = useState(1)
    const image = useRef(null)


    function handleRemoveFromImage(image){
        let filteredImages = thumbnailImages.filter(i=>i.name!==image.name?i:null)
        setThumbnailImages(filteredImages);
    }

    function handleZoomIncrease(){
        let def = zoomVal
        if(zoomVal !== 5){
            def = def+1
            setZoomVal(def)
        }
    }
    function handleZoomDecrease(){
        let def = zoomVal
        if(zoomVal !== 1){
            def = def-1
            setZoomVal(def)
        }
    }

    useEffect(() => {
      if(image.current){
        image.current.style.transform = `scale(${zoomVal})`
      }
    }, [zoomVal])
    


    return(
        <div className="imagePreviewLarge">
            <img ref={image} src={thumbnailImagePreview.src}  alt={thumbnailImagePreview.name} />
            <div className="actions">
                <button onClick={(event)=>event.preventDefault()} className='zoom'>
                    <span onClick={handleZoomDecrease} id="minus" data-min={zoomVal==1?true:false}></span>
                    <b>zoom</b>
                    <span onClick={handleZoomIncrease} id="plus" data-max={zoomVal==5?true:false}></span>
                </button>
                <span>
                    <button onClick={(event)=>{
                        event.preventDefault()
                        handleRemoveFromImage(thumbnailImagePreview)
                        setImagePreviewModalOpened(false)
                    }} className="remove">Delete</button>
                </span>
            </div>
        </div>
    )
}



function AddProject() {



    const [modalOpened, setModalOpened] = useState(false)
    const [imageModalOpened, setImageModalOpened] = useState(false)
    const [stacksEx, setStacksEx] = useState([
        "HTML",
        "CSS",
        "VITE"
    ])
    const [imagePreviewModalOpened, setImagePreviewModalOpened] = useState(false)
    const [thumbnailImagePreviewOnClick, setThumbnailImagePreviewOnClick] = useState(null)
    const [thumbnailImagePreview, setThumbnailImagePreview] = useState(null)
    const [stackInputValueChanged, setStackInputValueChanged] = useState(false)
    
    // infos

    const [projectAuthor, setProjectAuthor] = useState("")
    const [projectName, setProjectName] = useState("")
    const [projectDescription, setProjectDescription] = useState("")
    const [thumbnailImages, setThumbnailImages] = useState([])
    const [projectStacks, setProjectStacks] = useState([])
    // --------
    
    const inputStack = useRef()
    const inputImage = useRef()


    function handleButtonClick(event){
        event.preventDefault()
        if(inputStack.current.value){
            setProjectStacks(prev=>([...prev,inputStack.current.value ]))                
        }
        setModalOpened(false)
    }
    function handleButtonImageClick(event){
        event.preventDefault()
        inputImage.current.click()
        setModalOpened(false)
    }
    function handleButtonImageConfirm(event){
        event.preventDefault()
        setThumbnailImages(prev=> ([...prev, thumbnailImagePreview]))
        setImageModalOpened(false)
    }

    const handleImageChange = async (event) => {
        let splPath = event.target.value.split("\\")
        let imageName = splPath[splPath.length-1]
        const isValidImageFormat = /\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/.test(imageName)

        if(!isValidImageFormat){
            console.log("invalid image format");
            return
        }else if(thumbnailImages.length == 10){
            console.log("thumbnails max limit reached");
            return
        }
    
        const file = event.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload =  () => {
                let image = {
                    id: thumbnailImages.length,
                    name: imageName,
                    src: reader.result
                }
                setThumbnailImagePreview(image)
            };
            reader.readAsDataURL(file);
        }
    };

    function handleRemoveFromStack(stack){
        let filteredStacks = projectStacks.filter(i=>i!==stack?i:null)
        setProjectStacks(filteredStacks);
    }
    function setStackInputValue(value){
        if(inputStack.current){
            inputStack.current.value = value
        }
    }
    function setStackInputValueChange(){
        if(stackInputValueChanged){
            setStackInputValueChanged(false)
        }else{
            setStackInputValueChanged(true)
        }
    }
    function handleAddProject(){
        let project = {
            projectAuthor,
            projectName,
            projectDescription,
            projectStacks,
            projectImages: thumbnailImages
        }
        
        
        console.log(project);
        
    }
    

    useEffect(() => {
      if(thumbnailImagePreview){
        setImageModalOpened(true)
      }
    }, [thumbnailImagePreview])
    useEffect(() => {
        if(thumbnailImages){
            setThumbnailImagePreview(null)

        }
      }, [thumbnailImages])

      const dispatch = useDispatch()
    useEffect(()=>{
        const main = "Create Your Masterpiece"
        const sub = "Add new projects with ease."
        dispatch(setHeroContent({main, sub}))
    }, [])
    
    
    
    

  return (
    <div className='AddProject'>
        <form>
            <label htmlFor="ProjectAuthor">
                <span className="txt">Project Author</span>
                <input onChange={e=>setProjectAuthor(e.target.value)} type="text" placeholder='e.g John Doe' />
            </label>
            <label htmlFor="ProjectName">
                <span className="txt">Project Name</span>
                <input onChange={e=>setProjectName(e.target.value)} type="text" placeholder='e.g Project Doe' />
            </label>
            <label htmlFor="ProjectStacks">
                <span className="txt">Project Stacks</span>
                {/* <input type="text" placeholder='e.g Project Doe' /> */}
                <div className="stacksList">
                    <ul className="stacksListCont">
                        {
                            projectStacks.length>0?
                                projectStacks.map((stack, index) =>{
                                    return <li key={index}>{stack} 
                                                <span id='remove' onClick={()=>handleRemoveFromStack(stack)}>
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <title>remove {`"${stack}"`}</title>
                                                            <rect width="24" height="24" fill="none"/>
                                                            <line x1="1.41421" y1="1" x2="23" y2="22.5858" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                                            <line x1="1" y1="22.5858" x2="22.5858" y2="1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                                        </svg>
                                                </span>
                                            </li>
                                })
                            :null
                        }
                    </ul>
                    <span className="addStack" onClick={()=>setModalOpened(true)}>
                        <b>add stack</b>
                        <i id='add'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <title>Collapse</title>
                                <rect width="24" height="24" fill="none"/>
                                <line x1="1.41421" y1="1" x2="23" y2="22.5858" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                <line x1="1" y1="22.5858" x2="22.5858" y2="1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </i> 
                    </span>
                        {
                            modalOpened?
                                <Modal className="addStackModal" title="Add stack" removeModal={()=>setModalOpened(false)}>
                                    <div className="addStackInputCont">
                                        <input ref={inputStack} onChange={setStackInputValueChange} type="text" placeholder='Stacks e.g HTML' />
                                        
                                        <ul className="stackEx">
                                            {
                                                stacksEx.map((item, index)=>{
                                                    return <li key={index} onClick={()=>setStackInputValue(item)}>{item}</li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="actions">
                                        <button onClick={handleButtonClick} className="add">Add</button>
                                    </div>
                                </Modal>
                            :null
                        }  
                </div>
            </label>
            <label htmlFor="ProjectThumbnail">
                <span className="txt">Add Project Thumbnail</span>
                {/* <input type="text" placeholder='e.g Project Doe' /> */}
                <div className="ImageList">
                    
                    <div className="listingCont">
                        <ul className="ImageListCont">
                            {
                                thumbnailImages&&thumbnailImages.length>0?
                                thumbnailImages.map((image, index)=>{
                                    return <li key={index} onClick={()=>{
                                        setThumbnailImagePreviewOnClick(image)
                                        setImagePreviewModalOpened(true)
                                    }}>
                                        <img src={image.src} alt={image.name} />
                                    </li>
                                })
                                :null
                            }
                        </ul>
                    </div>
                    <span className="addImage" onClick={()=>{
                        setImageModalOpened(true)
                    }}>
                        <i id='add'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <title>add image</title>
                                <rect width="24" height="24" fill="none"/>
                                <line x1="1.41421" y1="1" x2="23" y2="22.5858" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                <line x1="1" y1="22.5858" x2="22.5858" y2="1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </i> 
                        <input ref={inputImage} onChange={handleImageChange} type="file" hidden />
                    </span>
                </div>
                {
                    imageModalOpened?
                        <Modal className="addImageModal" title="Preview image" removeModal={()=>setImageModalOpened(false)}>
                            {
                                thumbnailImagePreview?
                                    <>
                                        <div className="imagePreview">
                                            <img src={thumbnailImagePreview.src}  alt={thumbnailImagePreview.name} />
                                        </div>
                                        <div className="actions">
                                            <b>Want to add this image?</b>
                                            <span>
                                                <button onClick={handleButtonImageConfirm} className="add">Yes</button>
                                                <button onClick={()=>{
                                                    setThumbnailImagePreview(null)
                                                }} className="add">No</button>
                                            </span>
                                        </div>
                                    </>
                                :<div className="actions">
                                    <span>
                                        <button onClick={handleButtonImageClick} className="add">Choose Image</button>
                                    </span>
                                </div>
                            }
                        </Modal>
                    :null
                }
                {
                    imagePreviewModalOpened?
                        <Modal className="previewImageModal" title={thumbnailImagePreviewOnClick?thumbnailImagePreviewOnClick.name:"Preview image"} removeModal={()=>setImagePreviewModalOpened(false)}>
                            {
                                thumbnailImagePreviewOnClick?
                                    <>
                                        <ImagePreview
                                            setImagePreviewModalOpened={(val)=>setImagePreviewModalOpened(val)}
                                            setThumbnailImages={(val)=> setThumbnailImages(val)}
                                            thumbnailImagePreview={thumbnailImagePreviewOnClick}
                                            thumbnailImages={thumbnailImages}
                                         />
                                        
                                    </>
                                :null
                            }
                        </Modal>
                    :null
                }
            </label>
            <label htmlFor="projectDescription">
                <span className="txt">Project Description</span>
                <Textarea onChange={(e)=>setProjectDescription(e.value)} title={projectName}/>
            </label>
        </form>
        <span className="submitBtn"> <b onClick={handleAddProject}>Add Project</b> </span>
         
    </div>
  )
}

export default AddProject