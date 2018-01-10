import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'

import UserReducer from './reducers/user/'
import AuthReducer from './reducers/auth/'
import NovelReducer from './reducers/novel'

const rootReducer = combineReducers({
  user: UserReducer,
  auth: AuthReducer,
  novel: NovelReducer,
  toastr: toastrReducer
})

export default rootReducer
