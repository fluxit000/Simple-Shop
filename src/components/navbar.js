import { useEffect, useState } from 'react'
import './navbar.css'

const Navbar = ()=>{
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return(<nav>
    <div className='shop-title'>
      {width < 860? "Shop":"Simple Shop"}
    </div>
    <input autoComplete="off" type="text"/>
    <div className='icons'>
      <button className="nav-button">
        REGISTER
      </button>
      <button className="nav-button">
        LOGIN
      </button>
      <span className="icon-svg">
        shopping_cart
      </span>
    </div>
  </nav>)
}

export default Navbar