import { combineReducers } from 'redux'
import { app } from './app'
import { posts } from './posts'

const rootReducer = combineReducers({ app, posts })

export default rootReducer