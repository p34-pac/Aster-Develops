/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './WriteBlog.css'
import Textarea from '../../Components/Textarea/Textarea'
import { useDispatch } from 'react-redux'
import { setHeroContent } from '../../Redux/ReducersAction'

function WriteBlog() {
    const [blogAuthor, setBlogAuthor] = useState("")
    const [blogTitle, setBlogTitle] = useState("")
    const [blogContent, setBlogContent] = useState("")

    const dispatch = useDispatch()

    useEffect(()=>{
        const main = "Share Your Voice"
        const sub = "Craft compelling stories."
        dispatch(setHeroContent({main, sub}))
    }, [])
  return (
    <div className='writeBlog'>
        <h1>Write Blog</h1>

        <form className="writeBlogForm">
            <label htmlFor="BlogAuthor">
                <span className="txt">Blog Author</span>
                <input onChange={e=>setBlogAuthor(e.target.value)} type="text" placeholder='e.g John Doe' />
            </label>
            <label htmlFor="BlogTitle">
                <span className="txt">Blog Title</span>
                <input onChange={e=>setBlogTitle(e.target.value)} type="text" placeholder='e.g A Blog something Doe' />
            </label>
            <label htmlFor="BlogContent">
                <span className="txt">Blog Content</span>
                <Textarea onChange={(e)=>setBlogContent(e.value)} title={blogTitle}>
                    <div className="editor">
                        <span className="btn addImageToContent">
                            <i id='add'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <title>add image</title>
                                    <rect width="24" height="24" fill="none"/>
                                    <line x1="1.41421" y1="1" x2="23" y2="22.5858" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                    <line x1="1" y1="22.5858" x2="22.5858" y2="1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </i> 
                        </span>
                    </div>
                </Textarea>
            </label>
        </form>
        
    </div>
  )
}

export default WriteBlog

