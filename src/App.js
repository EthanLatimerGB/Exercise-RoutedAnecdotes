import React from 'react'
import { connect } from 'react-redux'
import { 
    BrowserRouter as Router,
    Switch, 
    Route,
} from 'react-router-dom'
import About from './components/About'
import Anecdote from './components/Anecdote'
import AnecdoteList from './components/AnecdoteList'
import CreateNew from './components/CreateNew'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Notification from './components/Notification'

import {createAnecdote} from './reducers/anecdoteReducer'
import {deployTimedNotification} from './reducers/notificationReducer'

const App = (props) => {
    const addNew = (anecdote) => {
        anecdote.id = (Math.random() * 10000).toFixed(0)
        props.createAnecdote(anecdote)
    }

    const timedNotification = (content) => {
        props.deployTimedNotification(content, 5000)
    }

    const anecdoteById = (id) => props.anecdotes.find(a => a.id === id)

    const vote = (id) => {
        const anecdote = anecdoteById(id)
        const voted = {
        ...anecdote,
        votes: anecdote.votes + 1
        }
        props.setAnecdotes(props.anecdotes.map(a => a.id === id ? voted : a))
    }

    return (
        <Router>
            <div>
                <h1>Software anecdotes</h1>
                <Menu />
                <Notification content = {props.notification}/>
                <Switch>
                    <Route path = '/anecdotes/:id'>
                        <Anecdote anecdotes = {props.anecdotes}/>
                    </Route>
                    <Route path = '/createanecdote'>
                        <CreateNew addNew={addNew} handleNotification={timedNotification}/>
                    </Route>
                    <Route path = '/about'>
                        <About />
                    </Route>
                    <Route path = '/'>
                        <AnecdoteList anecdotes={props.anecdotes} />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

const mapStateToProps = (state) => {
    return{
        anecdotes: state.anecdotes,
        notification: state.notification
    }
}

const mapDispatchToProps = {
    createAnecdote, 
    deployTimedNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
