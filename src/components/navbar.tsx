import { useEffect, useState } from 'react'
import './navbar.css'

import { productsFetch } from '../store/slices/products'

import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../store'

const Navbar = ()=>{
  const [width, setWidth] = useState(window.innerWidth)

  const [inputValue, setInput] = useState("")

  const [firstRender, setFirstRender] = useState(true)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const location = useLocation()

  useEffect(()=>{
    if(firstRender){
      setFirstRender(false)
      return
    }
    if(location.pathname === "/"){
      dispatch(productsFetch("",1))
    }
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
      {/* {width < 860? "Shop":"Simple Shop"} */}
      Simple Shop
    </Link>
    <div className='search-container'>
      <input className='search-input' 
      placeholder="Szukaj produktu" 
      onChange={(val)=>setInput(val.target.value)} 
      value={inputValue}
      onKeyUp={(e)=>e.key === "Enter"?dispatch(productsFetch(inputValue,1)):null}
      autoComplete="off" 
      type="text" />
      <button className='icon-svg search-button' onClick={()=>dispatch(productsFetch(inputValue,1))}>search</button>
    </div>
    <div className='icons'>
      {/* <button className="nav-button">
        Zaloguj się
      </button> */}
      <button className="icon-svg shopping-cart" onClick={()=>navigate("card")}>
        shopping_cart
      </button>
    </div>
  </nav>)
}

export default Navbar