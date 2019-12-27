import { place_success, place_failure, place_id, place_travellouges_success, place_travellouges_failure, place } from '../core/place/place_action';


test('createPlace_failure', () => {
    let result = place_failure()
    expect(result).toEqual({ type: 'PLACEINFO_FAILURE' })
})


test('place_success', () => {
    let data = {
        title: "",
        image1: "a",
        image2: "b",
        image3: "c"
    }
    let result = place_success(data)
    expect(result).toEqual(
        {
            type: 'PLACEINFO_SUCCESS',
            data: data,
            slides: [
                'a',
                'b',
                'c'
            ]
        }
    )

    data = {
        title: "",
        image1: "",
        image2: "",
        image3: ""
    }
    result = place_success(data)
    expect(result).toEqual(
        {
            type: 'PLACEINFO_SUCCESS',
            data: data,
            slides: [
                '',
                '',
                ''
            ]
        }
    )
})

test('place_travellouges_success', () => {
    let data = {
        travellouges: [
            'a',
            'b'
        ]
    }
    let result = place_travellouges_success(data)
    expect(result).toEqual(
        {
            type: 'PLACE_TRAVELLOUGE_SUCCESS',
            data: {
                travellouges: [
                    'a',
                    'b'
                ]
            }
        }
    )

    data = {
        travellouges: [
        ]
    }
    result = place_travellouges_success(data)
    expect(result).toEqual(
        {
            type: 'PLACE_TRAVELLOUGE_FAILURE'
        }
    )

    data = {
        travellouges: undefined
    }
    result = place_travellouges_success(data)
    expect(result).toEqual(
        {
            type: 'PLACE_TRAVELLOUGE_FAILURE'
        }
    )
})

test('place_travellouges_failure', () => {
    let result = place_travellouges_failure()
    expect(result).toEqual({ type: 'PLACE_TRAVELLOUGE_FAILURE' })
})

test('place_id', () => {
    let id = 10
    let result = place_id(id)
    expect(result).toEqual(
        {
            type: 'PLACE_ID',
            id: 10
        }
    )

    id = ''
    console.log("+++++++",Number(id))
    result = place_id(id)
    expect(result).toEqual(
        {
            type: 'PLACE_ID_WRONG'
        }
    )

    id = 'a'
    result = place_id(id)
    expect(result).toEqual(
        {
            type: 'PLACE_ID_WRONG'
        }
    )

    id = 1.2
    result = place_id(id)
    expect(result).toEqual(
        {
            type: 'PLACE_ID_WRONG'
        }
    )

    id = -1
    result = place_id(id)
    expect(result).toEqual(
        {
            type: 'PLACE_ID_WRONG'
        }
    )
})
test('place',()=>{
    let id = 10
    let result = place(id)
    expect(result).toEqual(
        expect.any(Function)
    )
})