import './App.css';
import Navbar from './components/navbar';
import Products from './components/products';
import ShoppingCart from './components/shoppingCart';

import {Route, Routes} from 'react-router-dom'
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { shoppingCartAction } from './store/slices/shoppingCart';




function App() {
  //updating shopping cart data to local storage
  const {totalPrice, itemsInCard} = useSelector(value=>value.shoppingCart)

  const dispatch = useDispatch()

  useEffect(()=>{
    if(totalPrice !== 0){
      localStorage.setItem("ShoppingCart", JSON.stringify({itemsInCard, totalPrice}));
    }
  },[itemsInCard, totalPrice])


  useEffect(()=>{
    console.log(localStorage.getItem("ShoppingCart"))
    const shoppingCartData = JSON.parse(localStorage.getItem("ShoppingCart"))
    if(shoppingCartData.totalPrice !== 0){
      dispatch(shoppingCartAction.updateCardData({newCard: shoppingCartData.itemsInCard, updatePrice: shoppingCartData.totalPrice}))
    }
  },[])

  return (
    <>
      <Navbar/>
      <main>
        <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/card' element={<ShoppingCart/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
