import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import "./Navbar.scss"
function Navbar() {

    // To convert navbar 
    const [active,setActive] = useState(false);
    const isActive = () =>{
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }
    useEffect(()=>{
        window.addEventListener("scroll" , isActive)
        return ()=>{
            window.removeEventListener("scroll" , isActive)
        }
    },[])
    
    // To show profile menu 
    const [open,setOpen] = useState(false);


    const currentUser = {
        id:1,
        userName:"Boyka",
        isSeller:true
    }

  return (
    <div className={active ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
                {/* <Link to="/">  */}
                    <span className='text'>Fiver</span>
                {/* </Link> */}
                <span className='dot'>.</span>
            </div>
            <div className="links">
                <span>Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign in</span>
                {!currentUser?.isSeller && <span>Become a Seller</span>}
                {!currentUser && <button>Join</button>}
                {currentUser && (
                    <div className="user" onClick={()=>setOpen(!open)}>
                        <img src="https://images.pexels.com/photos/15569150/pexels-photo-15569150.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                        <span>{currentUser?.userName}</span>
                       {open && <div className="options">
                            {currentUser?.isSeller && 
                                (<>
                                <span>Gigs</span>
                                <span>Add New Gig</span>
                                </>)
                            }
                            <span>Orders</span>
                            <span>Messages</span>
                            <span>Logout</span>
                        </div>}
                    </div>
                )}
            </div>
        </div>
            {active && (
            <>
                <hr />
                <div className="menu">
                    <span>Test</span>
                    <span>Test1</span>
                </div>
            </>
            )}
    </div>
  )
}

export default Navbar