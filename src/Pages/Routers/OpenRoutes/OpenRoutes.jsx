/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import Header from "../../../Components/Header/Header"
import { useState } from "react"
import myInfo from "../../../assets/datas/data"
import Hero, { getRand } from "../../../Components/Hero/Hero"
import Footer from "../../../Components/Footer/Footer"
import Sidebar from "../../../Components/Sidebar/Sidebar"

function OpenRoutes() {
    const {main, sub, cta, extra1, extra2} = useSelector(state => state.hero)
  const [menuOpened, setMenuOpened] = useState(false)
  const [sideSize, setSideSize] = useState("mini")
  const heroImg = myInfo().userDp[getRand(myInfo().userDp.length)]
    const toNav = useNavigate()

    const navigate = (to) => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
        toNav(to)
        setSideSize("mini")
      };
    function goTO(to){
        navigate(to)
    }

    function openMenu(){
        setMenuOpened(true)
      }
      function closeMenu(){
        setMenuOpened(false)
      }
    
      const action = {
        openMenu,
        closeMenu
      }

  return (
    <>
        

        <Sidebar goTO={goTO} sideSize={sideSize} setSideSize={(size)=>setSideSize(size)}/>
      <main 
        className={sideSize=="max"?"max":"min"}
        style={sideSize=="max"?{maxWidth: "calc(100vw - 300px)", transitionDuration: "200ms"}:{maxWidth: "calc(100vw - 55px)", transitionDuration: "200ms"}}
      >
        <Header action={action}
          style={sideSize=="max"?{width: "calc(100vw - 300px)", transitionDuration: "200ms"}:{width: "calc(100vw - 55px)", transitionDuration: "200ms"}}
        />
        <div className="coverImg">
          <img src={heroImg} alt="" />
        </div>
        <div className="mainContent">
        
          <Hero
            userInfo={myInfo()}
            main={main}
            sub={sub}
            cta={cta}
            extra1={extra1}
            extra2={extra2}
          />
          <div className="compoCont">
            <Outlet />
            
            <Footer navigate={navigate} menu={sideSize=="max"?"max":"min"} />
          </div>

          
        </div>
      </main>
    </>
  )
}

export default OpenRoutes

// main={
//     dir=="/"?myInfo().name
//     :dir=="Contact"?"Contact Me"
//     :dir=="Projects"?"My Projects"
//     :dir=="Blogs"?"My Blogs"
//     :dir=="About"?"About Me"
//     :dir=="getImageThumbnail"?"Get image thumbnail as text"
//     :""
//   }
//   sub={
//     dir=="/"?myInfo().about.occupation
//     :dir=="Contact"?"Get in touch with me "
//     :dir=="Projects"?"Made with love "
//     :dir=="Blogs"?"Made to inspire"
//     :dir=="About"?"It's A Me, Mario "
//     :dir=="getImageThumbnail"?"! this is stored as a text that can be copied"
//     :""
//   }