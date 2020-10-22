const notificationReducer = (state=null, action) => {
    switch(action.type){
        case'start-notification':
            return action.data
        case'reset-notification':
            return null
        default: 
            return state
    }
}

var timeoutID

export const deployTimedNotification = (notification, time) => {
    return async dispatch => {
        clearTimeout(timeoutID)
        dispatch({
            type: 'start-notification',
            data: notification
        })
        
        timeoutID = setTimeout(() => {
            dispatch( {type: 'reset-notification'} )
        }, time)
    }
}

export default notificationReducer