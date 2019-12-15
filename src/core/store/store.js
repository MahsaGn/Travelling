import {login_reducer} from '../login/login_reducer'
import {signup_reducer} from '../signup/signup_reducer'
import {createPlace_reducer} from '../createPlace/createPlace_reducer'
import {beacomeLeader_reducer} from '../becomeLeader/becomeLeader_reducer'
import {userProfile_reducer} from '../userProfile/userProfile_reducer'
import {place_reducer} from '../place/place_reducer'
import {homePage_reducer} from '../homePage/homePage_reducer'
import {searchedPlace_reducer} from '../searchedPlace/searchedPlace_reducer'
import {travellouge_reducer} from '../travellouge/travellouge_reducer'
import {combineReducers,createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';
import { stat } from 'fs'

const allReducers = combineReducers({
  login_reducer,
  signup_reducer,
  createPlace_reducer,
  beacomeLeader_reducer,
  userProfile_reducer,
  place_reducer,
  searchedPlace_reducer,
  homePage_reducer,
  travellouge_reducer
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
