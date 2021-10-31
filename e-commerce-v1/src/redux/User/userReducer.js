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
    case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
    case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };

    case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
    case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
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
