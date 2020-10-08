//this will be the code that binds all the states together.

import { combineReducer } from 'redux'

import userReducer from './user/user.reducer'

export default combineReducer({
    user: userReducer
})