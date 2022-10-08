import { useEffect, useState } from "react"
import './products.css'

const Products = ()=>{
  const [products, setProducts] = useState([])

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(()=>{
    fetch("http://192.168.0.102:8081/products")
      .then((response)=>response.json())
      .then((response)=>{
        setProducts(response)
      })
      .catch((e)=>{
         console.log(e)
      })
  },[])

  return(<div id="products">
    {products.map((product,id)=>
      <div className="product" key={id}>
        <div className="product-image-holder"><img className="product-image" src={product.imageUrl}/></div>
        <div className="product-title">{product.title.length > 20 && width < 680 ? product.title.slice(0,20)+"...":product.title}</div>
        <div className="product-price">{product.price} zł</div>
      </div>
    )}
  </div>)
}

export default Products