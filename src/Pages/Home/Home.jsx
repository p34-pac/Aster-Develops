/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import NavBtn from '../../Components/NavBtn/NavBtn'
import BlogCard from '../Blog/BlogCard'
import { smallSection } from '../Blog/SmallSection'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setHeroContent } from '../../Redux/ReducersAction'



function Icon({iconChild}){
    let icn = useRef()
    useEffect(() => {
      if(icn.current){
        icn.current.innerHTML = iconChild
      }
    }, [])
    
    return (
        <i ref={icn} className='IC-SkillIcon'></i>
    )
}
function Skill({skill}){
    const [hover, setHover] = useState(false)
      function toggleSetHover(){
        if (hover) {
            setHover(false)
        } else {
            setHover(true)
            
        }
      }
    return (
        <div className="skill" onMouseEnter={toggleSetHover} onMouseLeave={toggleSetHover}>
            <div className="skillHead">
                <Icon iconChild={skill.icon}/>
                <b>{skill.skill}</b>
            </div>
            {
                hover?
                <ul className="skillDescription">
                    {skill.others&&typeof(skill.others)=="object"?
                        skill.others.map((item, index)=><li key={index}>{item}</li>)
                    :<li>{skill.duration}</li>}
                </ul>
                :null
            }
            
        </div>
        
    )
}



function Home({blogs}) {
    const myInfo = useSelector(state => state.info)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
        const main = "Welcome to Our Creative Space"
        const sub = "Explore projects, blogs, and more."
        const cta = {text: "Get in touch", navTo: 'Contact' }
        dispatch(setHeroContent({main, sub, cta}))
    }, [])
    
  return (
    <div className='home'>
         <section className="write-up">
            <h1>About Me</h1>
            <p>
                Greetings! I{"'"}m Paul Peter, a tech-savvy college student deeply passionate about problem-solving and creating seamless digital experiences. Armed with 2 years of web development expertise in HTML, CSS, JavaScript, React, and Git, I bring a unique blend of creativity and technical proficiency. Eager to contribute to innovative projects, I{"'"}m actively seeking opportunities to apply my skills and make a meaningful impact. My approach combines critical thinking with a drive for results, making me a valuable asset to any team. Let{"'"}s explore the exciting possibilities ahead and create impactful solutions in the dynamic world of technology.
            </p>
        </section>
        <section className="skills">
            <h1>Skills</h1>
            <div className="skills_cont">
               
                
                {
                    myInfo&&myInfo.about.skills.map((skill, index)=>{
                        return <Skill key={index} skill={skill} />

                    })
                }
            </div>
        </section>
        {
           blogs&& blogs.length>0?
            <div className='blogList'>
            <h1>Blogs</h1>
            <ul className="blogListCont">
                {
                        blogs&&blogs.map((blog, index) => {
                        if(index < 4){
                            return <li key={index} >
                                        <BlogCard navigate={(dir) => navigate(dir)} file={blog.file} thumbnail={blog.BlogThumbnail} title={blog.context.title} by={blog.writerName} >{smallSection(blog.context.content)}</BlogCard>
                                    </li>
                        }
                    })
                }
            </ul>
            <div className="nav_btn-cont">
                <NavBtn navigate={()=> navigate("Blogs")} text="View More Blogs"/>
            </div>
        </div>
            :null
        }
        <section className="projects">
            <h1>Projects</h1>
            <div className="proj_cont">
                
                {
                    myInfo&&myInfo.projects.map((project, index)=>{
                        if(index <= 4){
                            return <ProjectCard navigate={()=>navigate(`/projects/${project.name}`)} key={index} project={project}  />
                        }
                    })
                }
            </div>
            <div className="nav_btn-cont">
                <NavBtn navigate={()=> navigate("Projects")} text="All Projects"/>
                <NavBtn navigate={()=> navigate("Contact")} text="Contact Me"/>
            </div>
            
        </section>
        
    </div>
  )
}

export default Home