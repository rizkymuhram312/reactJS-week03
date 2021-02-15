import React, {useState} from 'react'

 const CounterHook = () =>{
    const [count, setCount] = useState(0);

    return <div>
    <h2>Counter Hook : {count}</h2>
    <button onClick={()=>setCount(count + 1)}>Add</button>
    <button onClick={()=>setCount(count - 1)}>Minus</button>
      
</div>

    

}

export default CounterHook;