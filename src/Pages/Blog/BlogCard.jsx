/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import './Blogs.css'
import NavBtn from '../../Components/NavBtn/NavBtn'
import { removeSpace, removeText } from '../../action/spacing'


function BlogCard({title, by, thumbnail,children, navigate, onClick, file}) {

    



  return (
        <div className="blogCard">
            <div className="blogThumbnail">
                <img src={thumbnail} alt="" />
            </div>
            <div className="blogText">
                <b className="blogTitle">{removeText(title, "*")}</b>
                <b className="blogBy">{removeText(by, "*")}</b>
                <b className="blogMiniContent">{removeText(children, ["#", "*"])}</b>
            </div>
            <div className="goToBlog">
                <NavBtn navigate={()=> {
                    navigate(`blog?title=${file}`)
                    if(onClick){
                        onClick()
                    }
                }} text="Read More"/>
            </div>
        </div>
  )
}

export default BlogCard