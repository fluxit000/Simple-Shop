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
    fetch("http://192.168.0.100:8081/products")
      .then((response)=>response.json())
      .then((response)=>{
        setProducts(response)
      })
      .catch((e)=>{
         console.log(e)
      })
  },[])

  //product.title.length > 20 && width < 680 ? product.title.slice(0,20)+"...":product.title

  return(<div id="products">
    {products.map(product=>
      <div className="product" key={product._id}>
        <div className="product-image-holder"><img className="product-image" src={"http://192.168.0.100:8081/images/"+product._id+".jpg"}/></div>
        <div className="product-title">{product.title}</div>
        <div className="product-price">{product.price} zł</div>
      </div>
    )}
  </div>)
}

export default Products