/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import './BlogView.css'
import {marked} from 'marked';

import BlogCard from './BlogCard';
import myInfo from '../../assets/datas/data';
import { smallSection } from './SmallSection';
import { removeText, replaceWithSpace } from '../../action/spacing';
import CommentCard from '../../Components/CommentCard/CommentCard';
import { date, time } from './time';
import { addSubComment, getComments, likeComment} from './comments';
import NavBtn from '../../Components/NavBtn/NavBtn';

function BlogView({blog, myInfo, navigate}) {
    const [rend, setRend] = useState(false)
    const [presentComment, setPresentComment] = useState(blog.comments)
    const [commentShown, setCommentShown] = useState(false)
    const [times, setTime] = useState({})

    useEffect(() => {
    //   let date = new Date(blog.creationDate)
    let dateSpl = blog.creationDate.split("T")
    let dateItem = []
    let dateItemLst = []
    let timeFull;

    dateSpl.map((item, index) =>{
        if(item.includes(":")){
            dateItem.push(item.split(":"))

        }else if(item.includes("-")){
            dateItem.push(item.split("-"))

        }
    })
    console.log(dateItem);

    
    dateItem[1].map((item, index) =>{
        // dateItemLst.push(item.split(":"))
        let zz;
        if(item.includes(".")){
            zz = item.split(".")[0]
        }
        timeFull = {
            hour: dateItem[1][0],
            min: dateItem[0][1],
            sec: zz
        }
        
    })
    let dateFull = {
        year: dateItem[0][0],
        day: dateItem[0][2],
        month: dateItem[0][1]
    }
    // console.log(dateItem[0][1]);
    setTime({dateFull, timeFull})

    const contentDiv = document.getElementById("blogDescription");
    const htmlContent = marked(blog.context.content);
    contentDiv.innerHTML = htmlContent;

    }, [blog])
    


    const content = useRef()
    useEffect(() => {
        let main = document.querySelector(".main-text");
        let sub = document.querySelector(".sub-text");
        main.textContent = blog.title;
        sub.textContent = smallSection(blog.context.content)
        

        // Regular expression to find [imageN]
       const regex = /\[image(\d+)\]/g;

       // Replace [imageN] with <span>image</span>
    //    const outputString = blog.content.replace(regex, (match, p1)=>{
    //         return `<span class="imgContent"><img src="${blog.images[p1-1]}" alt="image${p1}" /></span>`
    //    });
    //    if(content.current!==undefined){
    //        content.current.innerHTML = outputString;
    //    }
       
    }, [rend])


    









    function reRender(){
        if(rend){
            setRend(false)
        }else{
            setRend(true)

        }
    }
    
// const commentCC = presentComment.map((comment, index) => { 
//             return <CommentCard key={index}  comment={comment}/>
//     })

    
    
  return (
    <div className='BlogView'>
        <div className="blogContent">
            <div className="blogPostInfo">
                <span className="blogDPImg">
                    <img src={blog.writerImage} alt="" />
                </span>
                <ul className="postInfos">
                    <li className='name'><b>{removeText(blog.writerName, "*")}</b></li>
                    <li className='moment'><b>{date(times.dateFull)}</b>, <b>{time(times.timeFull)}.</b></li>
                </ul>
            </div>
            <div id="blogDescription" className="blogDescription">
                {/* <h2 className='blogTitle'>{blog.context.title}</h2>
                <p className="content" ref={content}>
                    <span className="imgContent"></span>
                </p> */}


            </div>
            <ul className="reactions">
                <li className='like'>Like</li>
                <li className='share'>Share</li>
            </ul>
            {/* <div className="commentSection">
                <h2>
                    {!commentShown?
                    <b onClick={()=>setCommentShown(true)}>View comments</b>
                    :<>
                        <b>Comments</b> <span onClick={()=>setCommentShown(false)}>view Less</span>
                    </>
                    }
                
                </h2>
               <div className={commentShown?"commentsCont shown":"commentsCont"}>
                    {
                       { commentCC }
                    
                    }
                    
               </div>
            </div> */}
        </div>
        {/* <div className="recentBlogs">
            <h1>Recent Blogs</h1>
            <ul className="recentBlogList">
                {
                    myInfo().blogs.map((blog1, index) => {
                        if(blog1.title !== blog.title){
                            if(index >= myInfo().blogs.length-5){
                            
                            return <li key={index} ><BlogCard onClick={reRender}  navigate={(dir) => navigate(dir)} title={blog1.title} by={blog1.by} >
                                {smallSection(blog1.content)}
                                
                            </BlogCard></li>
                        }
                        
                        }
                        
                    })
                }
            </ul>
        </div> */}
    </div>
  )
}

export default BlogView