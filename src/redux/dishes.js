
import * as ActionTypes from './ActionTypes';

export const Dishes = (state = { isLoading: true,
    errMess: null,
    dishes:[]}, action) => {
        console.log("inside switch : " + JSON.stringify(action));
        console.log("payload : " + JSON.stringify(action))

    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            console.log("add dishes executing");
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            console.log("loading dishes executing");
            return {...state, isLoading: true, errMess: null, dishes: []}

        case ActionTypes.DISHES_FAILED:
            console.log("failed dishes executing");
            return {...state, isLoading: false, errMess: action.payload, dishes: []};
        default:
            return state;
    }
};