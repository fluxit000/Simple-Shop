import { useEffect, useState } from 'react'
import './navbar.css'

import { useDispatch } from 'react-redux'

import { productsFetch } from '../store'

const Navbar = ()=>{
  const [width, setWidth] = useState(window.innerWidth)

  const [inputValue, setInput] = useState()

  const dispatch = useDispatch()

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(()=>{
    const timeOut = setTimeout(() => {
      dispatch(productsFetch(inputValue))
    }, 500);

    return ()=>clearTimeout(timeOut)
  },[inputValue])

  return(<nav>
    <div className='shop-title'>
      {width < 860? "Shop":"Simple Shop"}
    </div>
    <input onChange={(val)=>setInput(val.target.value)} autoComplete="off" type="text" />
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