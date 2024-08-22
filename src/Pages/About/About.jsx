/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import './About.css'
import { useDispatch } from 'react-redux'
import { setHeroContent } from '../../Redux/ReducersAction'

function About() {
    const dispatch = useDispatch()
    useEffect(()=>{
        const main = "Our Story"
        const sub = "Learn about our journey and vision."
        dispatch(setHeroContent({main, sub}))
    }, [])


  return (
    <section className='about'>
        <section className="write-up">
            <h1>My Background</h1>
            <p>
                Hello there! I{"'"}m Paul Peter, a forward-thinking college student immersed in the ever-evolving realms of Computer Science and Software Engineering. Embr/acing the exciting intersection of technology and creativity, I thrive on solving intricate problems through a blend of critical thinking and innovative solutions.
                <br/>
                <br/>
                With a robust 2-year background in web development, my expertise encompasses HTML, CSS, JavaScript, React, and Git. I{"'"}ve passionately honed my skills, transforming concepts into compelling digital experiences. As a tech enthusiast, I{"'"}m driven by the desire to contribute to cutting-edge projects and push the boundaries of what{"'"}s possible in the digital landscape.
                <br/>
                <br/>
                I br/ing a unique blend of creativity and technical proficiency to the table, coupled with a proven track record of delivering results. Eager to continue my journey in a dynamic professional environment, I am actively seeking opportunities that allow me to leverage my skills and contribute meaningfully to innovative projects.
                <br/>
                <br/>
                If you{"'"}re in search of a resourceful problem-solver and dedicated web developer to elevate your team, let{"'"}s explore the exciting possibilities ahead. Together, we can create impactful solutions and leave an indelible mark on the ever-evolving world of technology.
            </p>
        </section>
        <section className="write-up">
            <h1>My Hobbies and Interests</h1>
            <p>
                Enthusiastic about the world of coding, I find joy in crafting digital solutions and exploring the endless possibilities of technology. Beyond the screen, my downtime revolves around two other passions: watching movies and gaming. When it comes to movies, I{"'"}m drawn to those that intertwine creativity, technology, and science, offering a unique blend of entertainment and inspiration.
                <br/><br/>
                In the gaming realm, I immerse myself in virtual adventures, not just for the thrill but for the strategic thinking and problem-solving challenges they present. These hobbies not only fuel my curiosity but also provide a well-rounded perspective, influencing my approach to coding and problem-solving. By combining my love for coding with cinematic and gaming experiences, I find a harmonious balance that enhances both my technical skills and creative thinking.
            </p>
        </section>
    </section>
  )
}

export default About