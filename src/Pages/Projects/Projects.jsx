/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import './Projects.css'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import NavBtn from '../../Components/NavBtn/NavBtn'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setHeroContent } from '../../Redux/ReducersAction'

function Projects() {
    const myInfo = useSelector(state => state.info)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=>{
        const main = "Our Work Speaks"
        const sub = "Discover our innovative projects."
        dispatch(setHeroContent({main, sub}))
    }, [])
  return (
    <section className="projects">
        <h1>Projects</h1>
        <div className="proj_cont">
            {
                myInfo.projects.map((project, index)=>{
                    if(index <= 4){
                        return <ProjectCard navigate={()=>navigate(`${project.name}`)} key={index} project={project}  />
                    }
                })
            }
        </div>
        <NavBtn navigate={()=> navigate("/Contact")} text="Contact Me"/>
    </section>
  )
}

export default Projects