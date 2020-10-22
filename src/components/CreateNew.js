import React from 'react'
import { useHistory } from 'react-router-dom'
import { useField } from '../hooks/index'

const CreateNew = (props) => {
    const content = useField('')
    const author = useField('')
    const url = useField('')
  
    const history = useHistory()
  
    const handleSubmit = (e) => {
      e.preventDefault()
      props.addNew({
        content: content.value,
        author: author.value,
        info: url.value,
        votes: 0
      })
      props.handleNotification(content.value)
      history.push('/')
    }

    const handleReset = (e) => {
        e.preventDefault()
        content.resetvalue()
        author.resetvalue()
        url.resetvalue()
    }
  
    return (
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={handleSubmit}>
          <div>
            content
            <input {...content}/>          
          </div>
          <div>
            author
            <input {...author} />
          </div>
          <div>
            url for more info
            <input {...url} />
          </div>
          <button type='submit'>create</button>
        </form>
        <button onClick={handleReset}>Reset</button>
        
      </div>
    )
  
}

export default CreateNew