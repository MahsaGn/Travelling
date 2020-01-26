import {createPlace_reducer} from '../core/createPlace/createPlace_reducer';


test('createPlace_reducer_fail',()=>{
    const initialState = {
        isCreated: false
    }
    const action ={type : 'CREATEPLACE_FAILUR' }
    console.log("+++++++++++++++++++",action.type)
    let result = createPlace_reducer(initialState,action)
    console.log("_____________________result1 is",result)
    expect(result).toEqual({ isCreated: false })

    const prestate_false = { isCreated : false }
    result = createPlace_reducer(prestate_false,action)
    console.log("_____________________result2 is",result)
    expect(result).toEqual({ isCreated: false })

    let prestate_true = { isCreated : true }
    result = createPlace_reducer(prestate_true,action)
    console.log("_____________________result3 is",result)
    expect(result).toEqual({ isCreated: false })
})

test('createPlace_reducer_success',()=>{
    const initialState = {
        isCreated: false
    }
    const action ={type : 'CREATEPLACE_SUCCESS' }
    let result = createPlace_reducer(initialState,action)
    console.log("_____________________result is",result)
    expect(result).toEqual({ isCreated: true })

    const prestate_false = { isCreated : false }
    result = createPlace_reducer(prestate_false,action)
    console.log("_____________________result is",result)
    expect(result).toEqual({ isCreated: true })

    let prestate_true = { isCreated : true }
    result = createPlace_reducer(prestate_true,action)
    console.log("_____________________result is",result)
    expect(result).toEqual({ isCreated: true })
})


test('createPlace_reducer_unrelevant',()=>{
    const state = {
        isCreated: false
    }
    const action ={type : 'KKKJGKLJ' }
    let result = createPlace_reducer(state,action)
    console.log("_____________________result is",result)
    expect(result).toEqual({ isCreated: false })

    const prestate_t = {
        isCreated: true
    }
    result = createPlace_reducer(prestate_t,action)
    console.log("_____________________result is",result)
    expect(result).toEqual({ isCreated: true })

})