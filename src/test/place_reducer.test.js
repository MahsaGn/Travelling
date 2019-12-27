import { place_reducer } from '../core/place/place_reducer';


test('place_success', () => {
    //input1
    let prestate = {
        placeLoaded: false,
        placeTravellougeLoaded: false,
        leadersLeaded: false,
        place_info: "",
        leaders_info: "",
        place_id: "",
        wrongPlaceid: true,
        slide_info: "",
        placeTravellouges: ""
    }
    let slides = []
    let data = {
        title: ""
    }
    let action = {
        type: 'PLACEINFO_SUCCESS',
        data: {
            title: ""
        },
        slides: slides
    }
    let expected = {
        placeLoaded: true,
        placeTravellougeLoaded: false,
        leadersLeaded: false,
        place_info: data,
        leaders_info: "",
        place_id: "",
        wrongPlaceid: true,
        slide_info: slides,
        placeTravellouges: ""
    }
    let result = place_reducer(prestate, action)
    expect(result).toEqual(expected)

    //input2
    prestate = {
        placeLoaded: true,
        placeTravellougeLoaded: true,
        leadersLeaded: true,
        place_info: "",
        leaders_info: "",
        place_id: "",
        wrongPlaceid: true,
        slide_info: "",
        placeTravellouges: ""
    }
    slides = ['a', 'b']
    data = {
        title: "hi"
    }
    action = {
        type: 'PLACEINFO_SUCCESS',
        data: {
            title: "hi"
        },
        slides: ['a', 'b']
    }
    expected = {
        placeLoaded: true,
        placeTravellougeLoaded: true,
        leadersLeaded: true,
        place_info: data,
        leaders_info: "",
        place_id: "",
        wrongPlaceid: true,
        slide_info: slides,
        placeTravellouges: ""
    }
    result = place_reducer(prestate, action)
    expect(result).toEqual(expected)
})

test('place_failure', () => {
    let prestate = {
        placeLoaded: true,
        placeTravellougeLoaded: true,
        leadersLeaded: true,
        place_info: {
            title: "hi"
        },
        leaders_info: "",
        place_id: "",
        wrongPlaceid: false,
        slide_info: [
            'a',
            'b'
        ],
        placeTravellouges: ['bb', 'a']
    }
    let action = {
        type: 'PLACEINFO_FAILURE'
    }
    let expected = {
        placeLoaded: false,
        placeTravellougeLoaded: false,
        leadersLeaded: false,
        place_info: "",
        leaders_info: [],
        place_id: "",
        wrongPlaceid: false,
        slide_info: [],
        placeTravellouges: []
    }
    let result = place_reducer(prestate, action)
    expect(result).toEqual(expected)
})

test('place_id', () => {
    let prestate = {
        placeLoaded: true,
        placeTravellougeLoaded: true,
        leadersLeaded: true,
        place_info: {
            title: "hi"
        },
        leaders_info: "",
        place_id: "",
        wrongPlaceid: false,
        slide_info: [
            'a',
            'b'
        ],
        placeTravellouges: ['bb', 'a']
    }
    let action = {
        type: 'PLACE_ID',
        id: 10
    }
    let expected = {
        placeLoaded: false,
        placeTravellougeLoaded: false,
        leadersLeaded: false,
        place_info: "",
        leaders_info: [],
        place_id: 10,
        wrongPlaceid: false,
        slide_info: [],
        placeTravellouges: []
    }
    let result = place_reducer(prestate, action)
    expect(result).toEqual(expected)


    prestate = {
        placeLoaded: true,
        placeTravellougeLoaded: true,
        leadersLeaded: true,
        place_info: {
            title: "hi"
        },
        leaders_info: "",
        place_id: "",
        wrongPlaceid: true,
        slide_info: [
            'a',
            'b'
        ],
        placeTravellouges: ['bb', 'a']
    }
    action = {
        type: 'PLACE_ID_WRONG'
    }
    expected = {
        placeLoaded: false,
        placeTravellougeLoaded: false,
        leadersLeaded: false,
        place_info: "",
        leaders_info: [],
        place_id: "",
        wrongPlaceid: true,
        slide_info: [],
        placeTravellouges: []
    }
    result = place_reducer(prestate, action)
    expect(result).toEqual(expected)
})

test('travelogue failure', () => {
    let prestate = {
        placeLoaded: true,
        placeTravellougeLoaded: true,
        leadersLeaded: true,
        place_info: {
            title: "hi"
        },
        leaders_info: "",
        place_id: "",
        wrongPlaceid: false,
        slide_info: [
            'a',
            'b'
        ],
        placeTravellouges: ['bb', 'a']
    }
    let action = {
        type: 'PLACE_TRAVELLOUGE_FAILURE'
    }
    let expected = {
        placeLoaded: true,
        placeTravellougeLoaded: false,
        leadersLeaded: true,
        place_info: {
            title: "hi"
        },
        leaders_info: "",
        place_id: "",
        wrongPlaceid: false,
        slide_info: [
            'a',
            'b'
        ],
        placeTravellouges: []
    }
    let result = place_reducer(prestate, action)
    expect(result).toEqual(expected)
})


test('travelogue success', () => {
    let prestate = {
        placeLoaded: true,
        placeTravellougeLoaded: false,
        leadersLeaded: true,
        place_info: {
            title: "hi"
        },
        leaders_info: "",
        place_id: "",
        wrongPlaceid: false,
        slide_info: [
            'a',
            'b'
        ],
        placeTravellouges: ['bb', 'a']
    }
    let action = {
        type: 'PLACE_TRAVELLOUGE_SUCCESS',
        data: ['a', 'b']
    }
    let expected = {
        placeLoaded: true,
        placeTravellougeLoaded: true,
        leadersLeaded: true,
        place_info: {
            title: "hi"
        },
        leaders_info: "",
        place_id: "",
        wrongPlaceid: false,
        slide_info: [
            'a',
            'b'
        ],
        placeTravellouges: [
            'a',
            'b'
        ]
    }
    let result = place_reducer(prestate, action)
    expect(result).toEqual(expected)
})

test('another on', () => {
    let prestate = {
        placeLoaded: true,
        placeTravellougeLoaded: false,
        leadersLeaded: true,
        place_info: {
            title: "hi"
        },
        leaders_info: "",
        place_id: "",
        wrongPlaceid: false,
        slide_info: [
            'a',
            'b'
        ],
        placeTravellouges: ['bb', 'a']
    }
    let action = {
        type: 'jlkjio',
        data: ['a', 'b']
    }
    let result = place_reducer(prestate, action)
    expect(result).toEqual(prestate)
})