import {
    omit
} from "lodash";
import {
    ADD_PERSON_TO_FAVORITE,
    REMOVE_PERSON_FROM_FAVORITE
} from "../constants/actionTypes"


const initialState = [];

const favoriteReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_PERSON_TO_FAVORITE: {
            let isObject = false;

            for(let i = 0; i<state.length; i++)
            {
                if(state[i].id==action.payload.id)
                {
                    isObject=true;
                    break;
                }
            }
            
            if(isObject==false)
            {
                return [
                    ...state,
                    action.payload
                ]
            }
            


        }
        case REMOVE_PERSON_FROM_FAVORITE: {
            return state.filter((item)=>item.id != action.payload);
        }
        default: {
            return state;
        }
    }
}


export default favoriteReducer;