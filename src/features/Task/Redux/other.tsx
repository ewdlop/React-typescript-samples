import React, { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { Task } from "./types";

interface IProps {
    isDone: boolean;
    Todos: Task[];
}//props


const makeNumOfTodosWithIsDoneSelector = () =>
    createSelector<IProps, boolean, Task[], boolean, number>(
        (state) => state.Todos,
        (_, isDone) => isDone,
        (Todos, isDone) => Todos.filter((todo: Task) => todo.isDone === isDone).length
    )

export const TodoCounterForIsDoneValue = ({ isDone } : IProps) => {

    const numOfTodosWithIsDoneValue = useSelector((state: IProps) =>
        selectNumOfTodosWithIsDone(state, isDone)
    );

    const selectNumOfTodosWithIsDone = useMemo(
        makeNumOfTodosWithIsDoneSelector,
        []
    );

    return (<div>{numOfTodosWithIsDoneValue}</div>)
}

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