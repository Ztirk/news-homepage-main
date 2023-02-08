import React, {useState} from 'react'
import logo from '/news-homepage-main/assets/images/logo.svg'
import './Nav.css'


function Nav() {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <div className='container'>
        <img className='logo' src={logo}></img>
        <div className={toggle ? 'navbar expanded' : 'navbar'}>
          <div>Home</div>
          <div>New</div>
          <div>Popular</div>
          <div>Trending</div>
          <div>Catagories</div>
        </div>
        <div className='toggle' onClick={handleToggle}>
          {toggle ? <i className='xmark fa-solid fa-xmark fa-3x'></i> : <i className='bars fa-solid fa-bars fa-3x'></i>}
        </div>
        <div className={toggle ? 'fade faded' : 'fade'}></div>
      </div>
    </>
  )
}

export default Nav

