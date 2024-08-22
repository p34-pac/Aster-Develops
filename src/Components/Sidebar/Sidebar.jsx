/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react'
import './Sidebar.css'
import myInfo from '../../assets/datas/data'

function Sidebar({setSideSize, sideSize, goTO}) {
  const menu = useRef()
  const miniMenu = useRef()
  const refLocSpl = window.location.href.split("/")
  const refLoc = refLocSpl[refLocSpl.length-1]
  const [othersDropped, setOthersDropped] = useState(false)


  
  
  useEffect(() => {

    if(menu.current){
      for (const key in menu.current.children) {
        if (Object.hasOwnProperty.call(menu.current.children, key)) {
          const element = menu.current.children[key];
          element.setAttribute("data-present", "false")
          



          if(refLoc.includes(element.id)){
            element.setAttribute("data-present", "true")
          }else if(refLoc == ""){
            if(element.id == "Home"){
              element.setAttribute("data-present", "true")
            }
        
          }else if(refLoc.includes("blog")){
            if(element.id == "Blogs"){
              element.setAttribute("data-present", "true")
            }
          }else if(refLoc.includes("projects")){
            if(element.id == "Projects"){
              element.setAttribute("data-present", "true")
            }
          }else if(refLoc.includes("getImageThumbnail") ){
            if (element.id == "Others") {
              element.setAttribute("data-present", "true")
            }
            
          }
        }
      }
    }
    if(miniMenu.current){
      for (const key in miniMenu.current.children) {
        if (Object.hasOwnProperty.call(miniMenu.current.children, key)) {
          const element = miniMenu.current.children[key];
          element.setAttribute("data-present", "false")
          if(refLoc.includes(element.id.split("Mini")[1])){
            element.setAttribute("data-present", "true")
          }else if(refLoc == ""){
            if(element.id == "MiniHome"){
              element.setAttribute("data-present", "true")
            }
        
          }else if(refLoc.includes("blog")){
            if(element.id == "MiniBlogs"){
              element.setAttribute("data-present", "true")
            }
          }else if(refLoc.includes("project")){
            if(element.id == "MiniProjects"){
              element.setAttribute("data-present", "true")
            }
          }
        }
      }
    }
    
  }, [refLoc])
  function toggleOthersDrop(){
    if(othersDropped){
      setOthersDropped(false)
    }else{
      setOthersDropped(true)

    }
  }

  return (
    <div className={sideSize=="max"?"sidebar max":"sidebar min"}
        style={sideSize=="max"?{width: "300px", transitionDuration: "200ms"}:{width: "55px", transitionDuration: "200ms"}}
      >
        {sideSize == "max"?
        <div className="maxCont">
          <div className='topHead'>
            <span onClick={()=> setSideSize("mini")}>
              <i className="ic-OPMNU open-menu">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>Collapse</title>
                    <rect width="24" height="24" fill="none"/>
                    <line x1="1.41421" y1="1" x2="23" y2="22.5858" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="1" y1="22.5858" x2="22.5858" y2="1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
              </i>
            </span>
            <h2>Hi there</h2>
          </div>
          <ul ref={menu} className="navList">
            
            <li id='Home' onClick={()=>goTO("/")}><b> <i>
              <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 3.1875L21.4501 10.275L21.0001 11.625H20.25V20.25H3.75005V11.625H3.00005L2.55005 10.275L12 3.1875ZM5.25005 10.125V18.75H18.75V10.125L12 5.0625L5.25005 10.125Z" fill="#080341"/>
              </svg>
            </i> Home</b></li>
            <li id='Projects'onClick={()=>goTO("Projects")}><b><i>
              <svg width="800px" height="800px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="Combined-Shape" fill="#000000" transform="translate(64.000000, 34.346667)">
                          <path d="M192,7.10542736e-15 L384,110.851252 L384,332.553755 L192,443.405007 L1.42108547e-14,332.553755 L1.42108547e-14,110.851252 L192,7.10542736e-15 Z M42.666,157.654 L42.6666667,307.920144 L170.666,381.82 L170.666,231.555 L42.666,157.654 Z M341.333,157.655 L213.333,231.555 L213.333,381.82 L341.333333,307.920144 L341.333,157.655 Z M192,49.267223 L66.1333333,121.936377 L192,194.605531 L317.866667,121.936377 L192,49.267223 Z">

              </path>
                      </g>
                  </g>
            </svg>
            </i>Projects</b></li>
            <li id='About'onClick={()=>goTO("About")}><b><i>
            <svg fill="#000000" width="800px" height="800px" viewBox="0 -0.06 33.834 33.834" xmlns="http://www.w3.org/2000/svg">

                  <g transform="translate(-95.748 -577)">
                    <path d="M110.965,592.309a2.38,2.38,0,0,1,.489-1.434,9.29,9.29,0,0,1,1.443-1.482,10.139,10.139,0,0,0,1.321-1.372,1.985,1.985,0,0,0,.368-1.2,1.956,1.956,0,0,0-1.983-2,2.073,2.073,0,0,0-1.419.543,3.575,3.575,0,0,0-.954,1.582l-2.152-.939a5.029,5.029,0,0,1,1.724-2.656,4.626,4.626,0,0,1,2.9-.927,4.968,4.968,0,0,1,2.287.531,4.168,4.168,0,0,1,1.651,1.495,3.974,3.974,0,0,1,.612,2.175,3.688,3.688,0,0,1-.538,1.965,8.8,8.8,0,0,1-1.639,1.865,13.862,13.862,0,0,0-1.358,1.322,1.536,1.536,0,0,0-.379,1,2.85,2.85,0,0,0,.1.667h-2.2A2.737,2.737,0,0,1,110.965,592.309Zm1.467,6.968a1.851,1.851,0,0,1-1.357-.543,1.831,1.831,0,0,1-.551-1.359,1.875,1.875,0,0,1,.551-1.372,1.835,1.835,0,0,1,1.357-.556,1.87,1.87,0,0,1,1.909,1.928,1.834,1.834,0,0,1-.55,1.359A1.857,1.857,0,0,1,112.432,599.277Z"/>
                    <path d="M97.222,610.717a1.475,1.475,0,0,1-.626-.14,1.459,1.459,0,0,1-.848-1.333V580.572A3.576,3.576,0,0,1,99.32,577h26.69a3.576,3.576,0,0,1,3.572,3.572v20.416a3.576,3.576,0,0,1-3.572,3.571H106.038a2.555,2.555,0,0,0-1.637.594l-6.24,5.22A1.467,1.467,0,0,1,97.222,610.717ZM99.32,579a1.574,1.574,0,0,0-1.572,1.572V608.11l5.37-4.491a4.561,4.561,0,0,1,2.92-1.06H126.01a1.573,1.573,0,0,0,1.572-1.571V580.572A1.574,1.574,0,0,0,126.01,579Z"/>
                  </g>
              </svg>
            </i>About</b></li>
            <li id='Contact'onClick={()=>goTO("Contact")}><b><i>
              <svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g id="ic-contact-message">

                  <path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5px" d="M19.89,3.25H4.11a2,2,0,0,0-2,2v9.06a2,2,0,0,0,2,2H5.75l2.31,4a.85.85,0,0,0,1.48,0l2.32-4h8a2,2,0,0,0,2-2V5.25A2,2,0,0,0,19.89,3.25Z"/>
                  <line fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5px" x1="5.01" y1="7.86" x2="11.01" y2="7.86"/>
                  <line  fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5px" x1="5.01" y1="11.86" x2="18.01" y2="11.86"/>

                </g>

              </svg>
            </i>Contact</b></li>
            <li id='Blogs'onClick={()=>goTO("Blogs")}><b><i>
              <svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 5V3H7v2H1v16h22V5zM8 4h8v1H8zm14 16H2V10h20zm0-11H2V6h20z"/>
                <path fill="none" d="M0 0h24v24H0z"/>
              </svg>
            </i>Blogs</b></li>
            <li id='Others'><b onClick={toggleOthersDrop}><i>
              <svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" stroke="#000000" strokeWidth="2" d="M9,15 L9,23 L1,23 L1,15 L9,15 Z M23,15 L23,23 L15,23 L15,15 L23,15 Z M9,1 L9,9 L1,9 L1,1 L9,1 Z M23,1 L23,9 L15,9 L15,1 L23,1 Z"/>
              </svg>
            </i>Others</b>
            {othersDropped?
              <ul>
                <li id='getImageThumbnail' onClick={()=>goTO("getImageThumbnail")}><b>Get image Thumbnails</b></li>
                <li id='addProject' onClick={()=>goTO("addProject")}><b>Add new project +</b></li>
                <li id='writeBlog' onClick={()=>goTO("writeBlog")}><b>Write Blog</b></li>
              </ul>
            :null}
            
            
            </li>
          </ul>
          <div className="bottom">
            <div className="profile">
              <div className="dp">
                <img src={myInfo().userDp[0]} alt="" />
              </div>
              <div className="text">
                <b className="name">Paul Peter</b>
                <b className="email">peterpaultolulope@gmail.com</b>
              </div>
            </div>
            <ul className="socials">
              <li className="social">
                <a href="https://www.instagram.com/official_asterixh/?igsh=OGQ5ZDc2ODk2ZA%3D%3D" target="_blank">
                  <i className="ic-IG">
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.6799 7.00005C16.6799 6.44776 17.1281 6.00005 17.681 6.00005C18.2339 6.00005 18.6821 6.44776 18.6821 7.00005C18.6821 7.55233 18.2339 8.00005 17.681 8.00005C17.1281 8.00005 16.6799 7.55233 16.6799 7.00005Z" fill="black"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M12.6754 7.25005C10.0492 7.25005 7.92017 9.37669 7.92017 12C7.92017 14.6234 10.0492 16.75 12.6754 16.75C15.3017 16.75 17.4307 14.6234 17.4307 12C17.4307 9.37669 15.3017 7.25005 12.6754 7.25005ZM9.42184 12C9.42184 10.2051 10.8785 8.75005 12.6754 8.75005C14.4723 8.75005 15.929 10.2051 15.929 12C15.929 13.795 14.4723 15.25 12.6754 15.25C10.8785 15.25 9.42184 13.795 9.42184 12Z" fill="black"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M17.9395 2.83306C14.4691 2.44562 10.8818 2.44562 7.41138 2.83306C5.3971 3.05794 3.77096 4.64295 3.53415 6.66548C3.11915 10.2098 3.11915 13.7903 3.53415 17.3346C3.77096 19.3571 5.3971 20.9422 7.41138 21.167C10.8818 21.5545 14.4691 21.5545 17.9395 21.167C19.9538 20.9422 21.5799 19.3571 21.8167 17.3346C22.2317 13.7903 22.2317 10.2098 21.8167 6.66548C21.5799 4.64295 19.9538 3.05794 17.9395 2.83306ZM7.57817 4.32378C10.9377 3.94871 14.4132 3.94871 17.7727 4.32378C19.1043 4.47244 20.171 5.52205 20.3253 6.83973C20.7267 10.2683 20.7267 13.7318 20.3253 17.1604C20.171 18.478 19.1043 19.5277 17.7727 19.6763C14.4132 20.0514 10.9377 20.0514 7.57818 19.6763C6.2466 19.5277 5.17993 18.478 5.02564 17.1604C4.6242 13.7318 4.6242 10.2683 5.02564 6.83973C5.17993 5.52205 6.24659 4.47244 7.57817 4.32378Z" fill="black"/>
                      </svg>
                  </i>
                </a>     
              </li>
              <li className="social">
                <a href="https://x.com/AsterixhThanks" target="_blank">
                    <i className="ic-X">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.7489 3.34352C16.2579 3.25644 16.8278 3.22736 17.3642 3.31801C18.3221 3.47989 19.2069 3.92462 19.9064 4.59138C20.3636 4.60171 20.8129 4.51173 21.2105 4.38347C21.5469 4.27492 21.8312 4.14385 22.0303 4.04021C22.1294 3.98868 22.2059 3.94472 22.2556 3.91496C22.2804 3.90011 22.2985 3.88886 22.3092 3.88207L22.3187 3.87601C22.6159 3.67828 23.0115 3.71677 23.2647 3.96827C23.5179 4.21984 23.5587 4.61476 23.3622 4.91266C23.1543 5.22795 22.8656 5.79002 22.5422 6.41978C22.4913 6.5188 22.4396 6.61949 22.3872 6.72116C22.2017 7.08113 22.0115 7.44494 21.8342 7.75707C21.7229 7.95306 21.6039 8.15204 21.4838 8.32398V8.59775C21.4915 9.60338 21.376 10.6038 21.1416 11.577C20.9942 12.1893 20.7997 12.7909 20.5592 13.3763C19.9361 14.893 19.0167 16.2704 17.8547 17.4282C16.6927 18.5859 15.3113 19.5008 13.7914 20.1193C12.2728 20.7373 10.6463 21.0471 9.00661 21.0306C6.62966 21.0327 4.30272 20.3486 2.30579 19.0607C2.01167 18.871 1.88783 18.5035 2.0073 18.1747C2.12677 17.846 2.45783 17.6434 2.80528 17.6863C3.10598 17.7235 3.40872 17.7416 3.71171 17.7407C4.80036 17.7376 5.86829 17.4973 6.84322 17.0447C6.53333 16.9038 6.23747 16.73 5.96101 16.5253C5.14839 15.9234 4.54382 15.0834 4.2314 14.1223C4.15022 13.8725 4.20572 13.5985 4.37772 13.3999C4.3808 13.3964 4.38392 13.3929 4.38705 13.3894C4.20332 13.2257 4.0314 13.0475 3.87313 12.8559C3.16103 11.9937 2.76892 10.9123 2.76313 9.79453L2.76311 9.79065L2.76312 9.74065C2.76312 9.47478 2.90403 9.22879 3.13348 9.09407C3.19165 9.05992 3.2533 9.03421 3.31672 9.01697C2.97802 8.34189 2.80188 7.59644 2.80316 6.84018C2.80276 5.98342 3.02681 5.14145 3.45304 4.39795C3.57609 4.18331 3.79716 4.04307 4.04396 4.0231C4.29076 4.00312 4.53156 4.10598 4.68759 4.29802C5.65121 5.48403 6.85383 6.45429 8.21733 7.14576C8.91824 7.50121 9.6536 7.77891 10.4102 7.97534C10.8344 8.08547 11.2653 8.17006 11.7006 8.22849C11.6814 7.50523 11.8244 6.78236 12.1245 6.11443C12.5646 5.1346 13.3179 4.32843 14.2662 3.82233C14.6678 3.60801 15.2009 3.43729 15.7489 3.34352ZM4.45827 10.891C4.58806 11.2559 4.78114 11.5982 5.03147 11.9013C5.52334 12.4969 6.20604 12.9044 6.9641 13.0551C7.30176 13.1222 7.55047 13.41 7.56751 13.7535C7.58456 14.097 7.36556 14.408 7.0362 14.5082C6.76341 14.5911 6.48392 14.6489 6.20125 14.681C6.38804 14.9215 6.60776 15.1369 6.85544 15.3204C7.41725 15.7365 8.09495 15.9673 8.79423 15.9808C9.1115 15.9869 9.39067 16.1916 9.49161 16.4921C9.59255 16.7926 9.49345 17.124 9.24407 17.3201C8.19374 18.1456 6.9792 18.7213 5.69222 19.0151C6.75889 19.3564 7.87757 19.532 9.00911 19.5306L9.01783 19.5306C10.4595 19.5456 11.8897 19.2735 13.2248 18.7302C14.56 18.1868 15.7734 17.3832 16.7942 16.3661C17.815 15.3491 18.6226 14.1391 19.17 12.8068C19.3813 12.2926 19.5521 11.7641 19.6816 11.2262C19.8877 10.3704 19.9891 9.49078 19.9822 8.60651L19.9822 8.60065V8.07065C19.9822 7.88879 20.0483 7.71314 20.1683 7.57636C20.2376 7.49732 20.359 7.31476 20.5282 7.01686C20.689 6.73374 20.867 6.39383 21.0521 6.03465C21.0633 6.01293 21.0745 5.99109 21.0858 5.96915C20.6057 6.0733 20.0615 6.12789 19.491 6.06631C19.3104 6.0468 19.1429 5.96252 19.0197 5.82908C18.5163 5.28374 17.8459 4.92073 17.1137 4.79699C16.7888 4.74209 16.396 4.75465 16.0025 4.82199C15.5749 4.89515 15.2028 5.02317 14.9739 5.14534C14.3189 5.49491 13.7985 6.05175 13.4945 6.72854C13.1905 7.40533 13.1199 8.16377 13.2939 8.88493C13.3494 9.11484 13.293 9.35742 13.1419 9.53945C12.9907 9.72148 12.7625 9.82164 12.526 9.80969C11.6817 9.76703 10.8463 9.63838 10.0325 9.42711C9.17165 9.20362 8.33499 8.88767 7.53754 8.48326C6.36346 7.88785 5.29422 7.11075 4.36836 6.18306C4.32612 6.39868 4.30468 6.6187 4.30483 6.84015L4.30482 6.84207C4.30378 7.39279 4.43908 7.93522 4.69867 8.42107C4.95827 8.90692 5.33411 9.32111 5.79273 9.62676C6.07106 9.81226 6.19292 10.1593 6.09156 10.4779C5.99019 10.7964 5.69006 11.0095 5.35559 11.0004C5.05266 10.9921 4.75226 10.9553 4.45827 10.891Z" fill="black"/>
                        </svg>                        
                    </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        :
        <div className="defaultLook">
          <div className="topHead">
            <span onClick={()=>setSideSize("max")}>
              <i className="ic-OPMNU open-menu">
                  <svg width="36" height="26" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <title>Expand</title>
                      
                      <line x1="1.5" y1="1.5" x2="34.4375" y2="1.5" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                      <line x1="8.6875" y1="13" x2="34.4375" y2="13" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                      <line x1="15.875" y1="24.5" x2="34.4375" y2="24.5" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
              </i>
            </span>
          </div>
          <ul ref={miniMenu} className="navList">
          
            <li id='MiniHome' onClick={()=>goTO("/")}><b>
                <i>
                  <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>Home</title>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 3.1875L21.4501 10.275L21.0001 11.625H20.25V20.25H3.75005V11.625H3.00005L2.55005 10.275L12 3.1875ZM5.25005 10.125V18.75H18.75V10.125L12 5.0625L5.25005 10.125Z" fill="#080341"/>
                  </svg>
                </i>
            </b>
            </li>
            <li id='MiniProjects'onClick={()=>goTO("Projects")}><b>
                <i>
                  <svg width="800px" height="800px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <title>Projects</title>
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g id="Combined-Shape" fill="#000000" transform="translate(64.000000, 34.346667)">
                              <path d="M192,7.10542736e-15 L384,110.851252 L384,332.553755 L192,443.405007 L1.42108547e-14,332.553755 L1.42108547e-14,110.851252 L192,7.10542736e-15 Z M42.666,157.654 L42.6666667,307.920144 L170.666,381.82 L170.666,231.555 L42.666,157.654 Z M341.333,157.655 L213.333,231.555 L213.333,381.82 L341.333333,307.920144 L341.333,157.655 Z M192,49.267223 L66.1333333,121.936377 L192,194.605531 L317.866667,121.936377 L192,49.267223 Z">

                  </path>
                          </g>
                      </g>
                </svg>
                </i>
            </b></li>
            <li id='MiniAbout'onClick={()=>goTO("About")}><b>
                <i>
                <svg fill="#000000" width="800px" height="800px" viewBox="0 -0.06 33.834 33.834" xmlns="http://www.w3.org/2000/svg">
                    <title>About Me</title>
                      <g transform="translate(-95.748 -577)">
                        <path d="M110.965,592.309a2.38,2.38,0,0,1,.489-1.434,9.29,9.29,0,0,1,1.443-1.482,10.139,10.139,0,0,0,1.321-1.372,1.985,1.985,0,0,0,.368-1.2,1.956,1.956,0,0,0-1.983-2,2.073,2.073,0,0,0-1.419.543,3.575,3.575,0,0,0-.954,1.582l-2.152-.939a5.029,5.029,0,0,1,1.724-2.656,4.626,4.626,0,0,1,2.9-.927,4.968,4.968,0,0,1,2.287.531,4.168,4.168,0,0,1,1.651,1.495,3.974,3.974,0,0,1,.612,2.175,3.688,3.688,0,0,1-.538,1.965,8.8,8.8,0,0,1-1.639,1.865,13.862,13.862,0,0,0-1.358,1.322,1.536,1.536,0,0,0-.379,1,2.85,2.85,0,0,0,.1.667h-2.2A2.737,2.737,0,0,1,110.965,592.309Zm1.467,6.968a1.851,1.851,0,0,1-1.357-.543,1.831,1.831,0,0,1-.551-1.359,1.875,1.875,0,0,1,.551-1.372,1.835,1.835,0,0,1,1.357-.556,1.87,1.87,0,0,1,1.909,1.928,1.834,1.834,0,0,1-.55,1.359A1.857,1.857,0,0,1,112.432,599.277Z"/>
                        <path d="M97.222,610.717a1.475,1.475,0,0,1-.626-.14,1.459,1.459,0,0,1-.848-1.333V580.572A3.576,3.576,0,0,1,99.32,577h26.69a3.576,3.576,0,0,1,3.572,3.572v20.416a3.576,3.576,0,0,1-3.572,3.571H106.038a2.555,2.555,0,0,0-1.637.594l-6.24,5.22A1.467,1.467,0,0,1,97.222,610.717ZM99.32,579a1.574,1.574,0,0,0-1.572,1.572V608.11l5.37-4.491a4.561,4.561,0,0,1,2.92-1.06H126.01a1.573,1.573,0,0,0,1.572-1.571V580.572A1.574,1.574,0,0,0,126.01,579Z"/>
                      </g>
                  </svg>
                </i>
            </b></li>
            <li id='MiniContact'onClick={()=>goTO("Contact")}><b>
              <i>
                <svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>Contact Me</title>
                
                  <g id="ic-contact-message">

                    <path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5px" d="M19.89,3.25H4.11a2,2,0,0,0-2,2v9.06a2,2,0,0,0,2,2H5.75l2.31,4a.85.85,0,0,0,1.48,0l2.32-4h8a2,2,0,0,0,2-2V5.25A2,2,0,0,0,19.89,3.25Z"/>
                    <line fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5px" x1="5.01" y1="7.86" x2="11.01" y2="7.86"/>
                    <line  fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5px" x1="5.01" y1="11.86" x2="18.01" y2="11.86"/>

                  </g>

                </svg>
              </i>
            </b></li>
            <li id='MiniBlogs'onClick={()=>goTO("Blogs")}><b>
              <i>
                <svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 5V3H7v2H1v16h22V5zM8 4h8v1H8zm14 16H2V10h20zm0-11H2V6h20z"/>
                  <title>Blogs</title>
                  
                  <path fill="none" d="M0 0h24v24H0z"/>
                </svg>
              </i>
            </b></li>
          </ul>
          <div className="bottom">
          <div className="profile">
            <div className="dp">
              <img src={myInfo().userDp[0]} alt="" />
            </div>
          </div>
          
        </div>
        </div>
        }

    </div>
  )
}

export default Sidebar