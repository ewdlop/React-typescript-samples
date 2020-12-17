import React from 'react';

enum Status {
    pending = "pending",
    resolved = "resolved",
    rejected = "rejected"
}

type State<R, E = unknown> = {
    status: Status;
    data: null | R;
    error: null | E;
};

type Action<R, E = unknown> =
    | { type: Status.pending }
    | { type: Status.resolved; data: R }
    | { type: Status.rejected; error: E };

const reducer = <R, E>(state: State<R, E>, action: Action<R, E>): State<R, E> => {
    switch (action.type) {
        case Status.pending: {
            return { status: Status.pending, data: null, error: null };
        }
        case Status.resolved: {
            return { status: Status.resolved, data: action.data, error: null };
        }
        case Status.rejected: {
            return { status: Status.rejected, data: null, error: action.error };
        }
        default: {
            throw new Error(`unhandled action type`);
        }
    }
}

const useRequest = <R, E = unknown>(intialState: State<R, E>) => {
    const [state, unsafeDispatch] = React.useReducer(reducer, intialState);
    // omit implementation details
}

useRequest({
    status: Status.pending,
    data: 4,
    error: null
})