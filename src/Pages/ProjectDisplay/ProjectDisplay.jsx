/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './ProjectDisplay.css'
import { NavBtnExternal } from '../../Components/NavBtn/NavBtn'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProjectCarousel from '../../Components/Carousel/Carousel'
import { setHeroContent } from '../../Redux/ReducersAction'



function ProjectDisplay() {
    const myInfo = useSelector(state => state.info)
    const {projectName} = useParams()
    const [project, setProject] = useState(null)
    const dispatch = useDispatch()

    // const name = param.name

    useEffect(() => {
        setProject(myInfo.projects.find(p => p.name == projectName));
      
    }, [projectName])

    useEffect(()=>{
            const main = "Project Spotlight"
            const sub = "Unveiling the details behind our work."
            dispatch(setHeroContent({main, sub}))
        }, [])
    
    useEffect(() => {
        // let main = document.querySelector(".main-text");
        // let sub = document.querySelector(".sub-text");
        // main.textContent = project.name;
        // let subSpl = project.description.split(" ")
        // subSpl.map(((item, index) => {
        //     if(index <= 4){
        //         if(index == 0){
        //             sub.textContent = item
        //         }else{
        //             sub.textContent += " " + item
        //             if(index == 4){
        //                 sub.textContent += "..."
        //             }
        //         }
        //     }
        // }))
    }, [])
    
    
    
  return (
    <div className='projectShow'>
        <section className="projectText">
            <div className="userProfile">
                <div className="userDp">
                    <img src={myInfo&&myInfo.userDp[0]} alt={myInfo&&myInfo.name} />
                </div>
                <span className="userName">{myInfo&&myInfo.name}</span>
            </div>
            <main>
                <h1 className="ProjectName">Project Name: {project&&project.name}</h1>
                <p>project version {project&&project.currentVersion}</p>
                <ul className="technologies">
                    <h2>&nbsp;Technology Used &nbsp;&nbsp;&nbsp;</h2>
                    {
                        project&&project.technologies.map((technology, index)=>{
                            return <li key={index}>{technology}</li>
                        })
                    }
                </ul>
                <div className="description">
                    <h3>Description</h3>
                    {project&&project.overview.description.split("\n").map((des, index) => {
                        if(index == 0){
                            return des
                        }else{
                            return <><br key={index}/> &nbsp;&nbsp;&nbsp;&nbsp;{des}</>
                        }
                    })}
                    {
                        project&&
                        <>
                            <h2>Key Feautures</h2>
                            <ul>
                                {project.overview.keyFeatures.map((feauture, index)=>(
                                    <li key={index}>{feauture.split(":")[0]}</li>
                                ))}
                            </ul>
                        </>
                    }
                    {
                        project&&
                        <>
                            {
                                project.updates&&
                                <details className='updates'>
                                    <summary><b>Updates</b></summary>

                                    {
                                        project.updates.map((update)=>(
                                            <details key={update.id}>
                                                <summary><b>Update v {update.version}</b></summary>
                                                <ul>
                                                    {update.updateFeatures.map((feauture, index)=>(
                                                        <li key={index}>{feauture.split(":")[0]}</li>
                                                    ))}
                                                </ul>
                                            </details>
                                        ))
                                    }
                                </details>
                            }
                            {
                                project.futureGoals&&
                                <details className='updates'>
                                    <summary><b>Future fixes</b></summary>

                                    <ul>
                                        {project.futureGoals.map((feauture, index)=>(
                                            <li key={index}>{feauture.split(":")[0]}</li>
                                        ))}
                                    </ul>
                                </details>
                            }
                        </>
                    }
                </div>
            </main>
        </section>
        <section className="projectThumbnail">
            {   project&&project.thumbnail.length>0&&<div className="thumbnailImg">
                    {<ProjectCarousel images={project.thumbnail} />}
                </div>
            }
            <div className="redirect">
                <NavBtnExternal url={project&&project.url}>Visit</NavBtnExternal>
                <NavBtnExternal url={project&&project.source}>View Source</NavBtnExternal>
            </div>
        </section>
    </div>
  )
}

export default ProjectDisplay