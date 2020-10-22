const anecdoteReducer = (state=[], action) => {
    switch(action.type){
        case 'add-anecdote':
            return [...state, action.data]
        default: 
            return state
    }
}

export const createAnecdote = (data) => {
    return async dispatch => {
        dispatch({
            type: 'add-anecdote',
            data: data
        })
    }
}

export default anecdoteReducer