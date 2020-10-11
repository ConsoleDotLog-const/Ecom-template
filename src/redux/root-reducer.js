//this will be the code that binds all the states together.

import { combineReducers } from 'redux'

import userReducer from './user/user.reducer'

export default combineReducers({
    user: userReducer
})