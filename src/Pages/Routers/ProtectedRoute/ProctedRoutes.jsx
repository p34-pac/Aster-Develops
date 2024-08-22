
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



/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import Header from "../../../Components/Header/Header"
import { useEffect, useState } from "react"
import myInfo from "../../../assets/datas/data"
import Hero, { getRand } from "../../../Components/Hero/Hero"
import Footer from "../../../Components/Footer/Footer"
import Sidebar from "../../../Components/Sidebar/Sidebar"
import PasswordInput from "../../../Components/Others/InputPassword"

function ProtectedRoutes() {
    const {main, sub} = useSelector(state => state.hero)
    const password = useSelector(state => state.password.password)
    const [inputed, setInputed] = useState('')
    const [authorized, setAuthorized] = useState(false)
    const [message, setMessage] = useState({type: 'error', message: '', return: false})
    
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

      useEffect(() => {
        const timeOut = setTimeout(() => {
            if(message.return){
                setMessage({type: 'error', message: '', return: false})
            }
        }, 3000);

        return ()=> clearTimeout(timeOut)
      }, [message])

      const handleSubmit = ()=>{
        if(inputed == password){
            setMessage({type: 'success', message: 'Welcome Asterixh', return: true})
            setTimeout(() => {
                setAuthorized(true)
            }, 2000);
        }else{
            setMessage({type: 'error', message: 'Password is incorrect', return: true})
        }
      }
      const handleCancel = ()=>{
        toNav('/')
      }
      

  return (
    <>
        {
            authorized?
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
                        />
                        <div className="compoCont">
                            <Outlet />
                            
                            <Footer navigate={navigate} menu={sideSize=="max"?"max":"min"} />
                        </div>

                        
                        </div>
                    </main>
                </>
            
            :<div className="inputPassword">
                <h3>Please input password</h3>
                {message.return&&<b className={message.type}>{message.message}</b>}
                <PasswordInput value={inputed} onChange={(e) => setInputed(e.target.value)} placeholder="Input password" />
                <div className="buttons">
                    <button onClick={handleSubmit}>Submit</button>
                    <button onClick={handleCancel}>cancel</button>
                </div>
            </div>
        }
    </>
  )
}

export default ProtectedRoutes

