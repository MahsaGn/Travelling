import {Login_reducer} from './reducer/login_reducer'
import {combineReducers,createStore} from 'redux'

const allReducers = combineReducers({
  login:Login_reducer
})
function saveToLocalStorage(state){
  try{
    const serializedState = JSON.stringify(state)
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
console.log("store is created")
const store =  createStore(allReducers,presistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
);
store.subscribe(()=> saveToLocalStorage(store.getState()))
export default store
