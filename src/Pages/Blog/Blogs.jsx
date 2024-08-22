/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './Blogs.css'
import BlogCard from './BlogCard'
import { smallSection } from './SmallSection'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setHeroContent } from '../../Redux/ReducersAction';

export function displayMarkdownAsHTML(markdown, displayOnId) {
  const contentDiv = document.getElementById(displayOnId);
  const htmlContent = marked(markdown);
  contentDiv.innerHTML = htmlContent;
}





function Blogs({blogs}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
    useEffect(()=>{
        const main = "Insights & Ideas"
        const sub = "Insights & Ideas"
        dispatch(setHeroContent({main, sub}))
    }, [])

  return (
    <div className='blogList'>
        <ul className="blogListCont">
        {
          blogs&&blogs.length>0?blogs.map((blog, index) => {
                return <li key={index} >
                <BlogCard navigate={(dir) => navigate(dir)} file={blog.file} thumbnail={blog.BlogThumbnail} title={blog.context.title} by={blog.writerName} >{smallSection(blog.context.content)}</BlogCard>
                </li>
            }):<p>No Blog Available</p>
        }
            
        </ul>
    </div>
  )
}

export default Blogs