import { reducer } from 'redux-refresh-token'

const store = createStore(
  combineReducers({
    tokenRefresh: refreshReducer,
    homePage_reducer,
    userProfile_reducer,
    // Other reducers
  }),
  {},
  applyMiddleware(api)
)