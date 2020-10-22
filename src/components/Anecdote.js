import React from 'react'
import { useParams } from 'react-router-dom'

const Anecdote = ( {anecdotes} ) => {
    const id = useParams().id
    const anecdote = anecdotes.find(n => Number(n.id) === Number(id))
    console.log(anecdote)
    return(
        <div>
            <h2>{anecdote.content}</h2>
            <p>{anecdote.author}</p>
            <p>{anecdote.info}</p>
            <p>{anecdote.votes}</p>
        </div>
    )
}

export default Anecdote