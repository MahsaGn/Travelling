import {login_reducer} from './core/login/login_reducer'
import {signup_reducer} from './core/signup/signup_reducer'
import {createPlace_reducer} from './core/createPlace/createPlace_reducer'
import {beacomeLeader_reducer} from './core/becomeLeader/becomeLeader_reducer'
import {userProfile_reducer} from './core/userProfile/userProfile_reducer'
import {combineReducers,createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';

const allReducers = combineReducers({
  login_reducer,
  signup_reducer,
  createPlace_reducer,
  beacomeLeader_reducer,
  userProfile_reducer
})
function saveToLocalStorage(state){
  try{
    console.log("this is current state",state)
    let preState={
      login_reducer:state.login_reducer
    }
    const serializedState = JSON.stringify(preState)
    localStorage.setItem('state',serializedState)
  }catch(e){
    console.lod(e)
  }
}
function loadFromLocalStorage(){
  try{
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  }catch(e){
    console.log(e)
    return undefined
  }
}
const presistedState = loadFromLocalStorage()
const composeEnhancer =compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)
console.log("store is created")
const store =  createStore(allReducers,presistedState,composeEnhancer
);
store.subscribe(()=> saveToLocalStorage(store.getState()))
export default store
