import React,{ useCallback} from 'react'
import { useDispatch } from 'react-redux'


interface IValue
{
  value :any;
}

interface IValue2
{
  onIncrement : () => {
    type:string
  };
}

export const CounterComponent = ({ value } : IValue) => {
    const dispatch = useDispatch()
    const incrementCounter = useCallback(
      () => dispatch({ type: 'increment-counter' }),
      [dispatch]
    )
  
    return (
      <div>
        <span>{value}</span>
        <MyIncrementButton onIncrement={incrementCounter} />
      </div>
    )
  }
  
  export const MyIncrementButton = React.memo(({ onIncrement } : IValue2) => (
    <button onClick={onIncrement}>Increment counter</button>
  ))