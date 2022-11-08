import { useEffect, useState } from 'react';
import { useAppDispatch } from '../store';
import './filter.css';

const Filter = ()=>{
    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(0)

    const dispatch = useAppDispatch()

    const changeMin = (e:React.ChangeEvent<HTMLInputElement>)=>{
    }

    const changeMax = (e:React.ChangeEvent<HTMLInputElement>)=>{
    }

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