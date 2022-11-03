import './App.css';
import Navbar from './components/navbar';
import Products from './components/products';
import ShoppingCart from './components/shoppingCart';
import ProductDetails from './components/productDetails';

import {Route, Routes} from 'react-router-dom'
import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ShoppingCart as ShoppingCartDef, shoppingCartAction } from './store/slices/shoppingCart';
import {Products as ProductsDef} from './store/slices/products';
import { RootState } from './store';




function App() {
  //updating shopping cart data to local storage
  const {totalPrice, itemsInCard} = useSelector((value:RootState)=>value.shoppingCart)

  const dispatch = useDispatch()
  const [firstEnter, setFirstEnter] = useState(true)

  useEffect(()=>{
    if(!firstEnter){
      localStorage.setItem("ShoppingCart", JSON.stringify({itemsInCard, totalPrice}));
    }
    else{
      setFirstEnter(false)
    }
    
  },[itemsInCard, totalPrice])


  useEffect(()=>{
    const shoppingCartData = JSON.parse(localStorage.getItem("ShoppingCart")!.toString())
    if(shoppingCartData){
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
          <Route path='/product/:id' element={<ProductDetails/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
