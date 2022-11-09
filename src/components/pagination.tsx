import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../store'
import { productsFetch } from '../store/slices/products'
import './pagination.css'


const Pagination = ()=>{

    const currentPage = useSelector((s:RootState)=>s.products.currentPage)
    const lastPage = useSelector((s:RootState)=>s.products.lastPage)

    const dispatch = useAppDispatch()

    const getPagingRange = (current:number, {min = 1, total = 20, length = 5} = {})=>{
        if (length > total) length = total;
      
        let start = current - Math.floor(length / 2);
        start = Math.max(start, min);
        start = Math.min(start, min + total - length);
       
        return Array.from({length: length}, (el, i) => start + i)
    }

    return (<section className='pages'>
        {getPagingRange(currentPage,{min:1, total: lastPage, length:7}).map(i=>
        <button 
        tabIndex={0}
        key={i} 
        onClick={()=>dispatch(productsFetch("", i, "page"))} 
        className={'page-number '+(currentPage===i?"page-active":"")}
        >
            {i}
        </button>)}
    </section>)
}

export default Pagination