import React from 'react'

const Counter = ({counter, setCounter}) => {
    //const [counter , setCounter] = useState(0);
  
    const onAdd = () => {
        setCounter(counter + 1);
    }

    const subtract = () => {
        if(counter !== 0){
            setCounter(counter - 1);
        }
    }


    return (
    <div>
        <div>
            <button disabled={counter === 0} onClick={subtract}>-</button>
            <span>{counter}</span>
            <button disabled={counter === 0} onClick={onAdd}>+</button>
        </div>
    </div>
  )
}

export default Counter