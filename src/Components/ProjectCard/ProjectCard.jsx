/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './ProjectCard.css'
import { removeSpace } from '../../action/spacing'

function ProjectCard({navigate, project}) {
  return (
    <div className="project por">
        <aside className="bg-img">
            <img src={project.thumbnail[0]} alt="project1" />
        </aside>
        <div className="content">
            <h2>{project.name}</h2>
            <ul className="properties">
                <h3 className="tech-used">Technology used</h3>
                
                {
                    project.technologies.map((technology, index)=> (
                        index<3&&<li key={index}>{technology}</li>
                    ))
                }
            </ul>
        </div>
        <a target="_blank" onClick={navigate}><button className="view">View</button></a>

    </div>
  )
}

export default ProjectCard