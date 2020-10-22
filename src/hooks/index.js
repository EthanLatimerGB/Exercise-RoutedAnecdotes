import { useState } from 'react'

export const useField = (type) => {
    const [value, setValue] = useState('')

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const resetvalue = () => {
        setValue('')
    }

    return {
        type,
        value, 
        onChange,
        resetvalue
    }
}

export const useAnotherHook = () => {

}