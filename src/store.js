import {login_reducer} from './core/login/login_reducer'
import {signup_reducer} from './core/signup/signup_reducer'
import {combineReducers,createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';

const allReducers = combineReducers({
  login_reducer,
  signup_reducer
})
function saveToLocalStorage(state){
  try{
    let preState={
      login: state.login
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
