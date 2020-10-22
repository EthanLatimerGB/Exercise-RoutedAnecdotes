import React from 'react'

const Notification = (props) => {
    if(props.content === null){
        return null
    }else{
        return(
            <div>
                {props.content} has been created!
            </div>
        )
    }
}

export default Notification