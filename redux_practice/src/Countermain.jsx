import { useState } from "react"
import {useSelector,useDispatch} from 'react-redux';
import {increament,decreament,reset,incrementbyamount} from './features/counter/Counter'
export default function (){
    const [amount,setamount]=useState('0')
    const dispatch=useDispatch()
    function addamount(e){
        setamount(e.target.value)
    }
    
   return (<>
   <button onClick={()=>dispatch(increament())}>+</button>
   <div>{useSelector((state)=>state.counter.count)}</div>
   <button onClick={()=>dispatch(decreament())}>-</button>
   <br />
   <button onClick={()=>dispatch(reset())}>reset</button>
   <br/>
   <div>{amount}</div>
    <input type="text" onChange={(e)=>addamount(e)} placeholder="enter" />
    <button onClick={()=>dispatch(incrementbyamount(Number(amount)||0))}>add</button>
    </>
    
   )
}
