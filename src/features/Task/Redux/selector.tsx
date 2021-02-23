import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
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