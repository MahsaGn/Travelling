import homePage_api from "../api/homePage_api";

export const homePage_action_types={
    LOGEDIN_SUCCESS: 'LOGEDIN_SUCCESS',
    LOGEDIN_FAILURE: 'LOGEDIN_FAILURE'
}

export const logedin_failure = () => {
    return {
        type: homePage_action_types.LOGEDIN_FAILUR,
    }
}
export const logedin_success = () => {
    return {
        type: homePage_action_types.LOGEDIN_FAILURE,
    }
}

export const show_place = (data) => {
    let topPlace = [data.image1,data.image2,data.image3]
    return {
        data: data
    }
} 