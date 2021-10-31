// import { UserActionTypes } from './userTypes';

// const initialState = {

//     currentUser:null

// }

// const userReducer= (state = initialState,action) => {

//     switch (action.type) {
//         case UserActionTypes.SET_CURRENT_USER:
//             return{
//                 ...state,
//                 currentUser:action.payload
//             }

//         default:
//             return state;
//     }
// }

// export default userReducer;

/**
 * REDUX-SAGA IMPLEMANTATION START
 */
import { UserActionTypes } from "./userTypes";

const initialState = {
  currentUser: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };

    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };

    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;

/**
 * REDUX-SAGA IMPLEMANTATION END
 */
