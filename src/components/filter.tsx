import { useEffect, useState } from 'react';
import { useAppDispatch } from '../store';
import { productsFetch } from '../store/slices/products';
import './filter.css';

const Filter = ()=>{
    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(0)
    const [firstRender, setFirstRender] = useState(true)

    const changeMin = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setMin(Number(e.target.value))
    }

    const changeMax = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setMax(Number(e.target.value))
    }

    const dispatch = useAppDispatch()

    useEffect(()=>{
        if(firstRender){
            setFirstRender(false)
            return
        }
        if(!min && !max){
            dispatch(productsFetch("", 0, "filter", {}))
            return
        }
        const timeOut = setTimeout(() => {
            dispatch(productsFetch("", 0, "filter",{minPrice: min, maxPrice: max}))
        }, 500);

        return ()=>clearTimeout(timeOut)
    },[min, max])

    return (<div id='filter-container'>
        <div id='filter-title'>Filtry</div>
        <div id='filter-option'>
            <div className='filter-option-title'>Cena</div>
            <div className='filter-input-container'>
                <input type="number" className='number' onChange={changeMin} /> 
                <input type="number" className='number' onChange={changeMax} />
            </div>
        </div>
        
    </div>)
}

export default Filter