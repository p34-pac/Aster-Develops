/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './CommentCard.css'
import { time } from '../../Pages/Blog/time'
import myInfo from '../../assets/datas/data';
import { getComments } from '../../Pages/Blog/comments';
import { useRef } from 'react';

function CommentCard({comment}) {
    const [subCommentShown, setSubCommentShown] = useState(false)
    function openSubComments(){
        
        if (subCommentShown) {
            setSubCommentShown(false)
        } else {
            setSubCommentShown(true)
        }
    }

    
    

    
  return (
    <div className='commentCard'>
        <div className="userProfile">
            <div className="userDp"></div>
            <div className="userProfileText">
                <b className="name">{comment.from}</b>
                <b className="time"><b>{time(comment.time)}</b></b>
            </div>
        </div>
        <span className="commentContent">
            {comment.content}
        </span>
        <ul className="reactions">
                <li className='like'>Like</li>
                <li className='comment' >Comment</li>
        </ul>
        <div className="subComments">
            {
                comment.subComments.length>=1?
                <>
                    <span onClick={openSubComments}>
                    {
                        !subCommentShown?
                        <>
                            view {comment.subComments.length} {comment.subComments.length>1?"Replies":"Reply"} to {comment.from}
                        </>
                        :"view less"
                    }
                    </span>
                        <div className={subCommentShown?"subCommentCont shown":"subCommentCont"}>
                            {
                                comment.subComments.map((comment, index)=>{
                                return <CommentCard key={index} comment={comment}  />
                                })
                            }
                        </div>
                </>
                :null
            }
        </div>
    </div>
  )
}

export default CommentCard