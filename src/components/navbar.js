import { useEffect, useState } from 'react'
import './navbar.css'

import { useDispatch } from 'react-redux'

import { productsFetch } from '../store/slices/products'

import { Link, useLocation } from 'react-router-dom'

const Navbar = ()=>{
  const [width, setWidth] = useState(window.innerWidth)

  const [inputValue, setInput] = useState("")

  const dispatch = useDispatch()

  const location = useLocation()

  useEffect(()=>{
    setInput("")
  },[location])

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  

  return(<nav>
    <Link to="/" className='shop-title'>
      {width < 860? "Shop":"Simple Shop"}
    </Link>
    <div className='search-container'>
      <input className='search-input' 
      placeholder="Search for products" 
      onChange={(val)=>setInput(val.target.value)} 
      value={inputValue}
      onKeyUp={(e)=>e.key === "Enter"?dispatch(productsFetch(inputValue)):null}
      autoComplete="off" 
      type="text" />
      <button className='icon-svg search-button' onClick={()=>dispatch(productsFetch(inputValue))}>search</button>
    </div>
    <div className='icons'>
      <button className="nav-button">
        REGISTER
      </button>
      <button className="nav-button">
        LOGIN
      </button>
      <Link to="card" className="icon-svg shopping-cart">
        shopping_cart
      </Link>
    </div>
  </nav>)
}

export default Navbar