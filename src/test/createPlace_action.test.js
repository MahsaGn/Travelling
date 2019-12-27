import {createPlace_failure,createPlace_success,createPlace} from '../core/createPlace/createPlace_action';


test('createPlace_failure',()=>{
    let result = createPlace_failure()
    console.log("_____________________result is",result)
    expect(result).toEqual({ type: 'CREATEPLACE_FAILUR' })
})


test('createPlace_success',()=>{
    let result = createPlace_success()
    console.log("_____________________result is",result)
    expect(result).toEqual({ type: 'CREATEPLACE_SUCCESS' })
})

test('createPlace',()=>{
    let input = ""
    let result = createPlace(input)
    console.log("_____________________result is",result)
    expect(result).toEqual(
        expect.any(Function)
    )
})