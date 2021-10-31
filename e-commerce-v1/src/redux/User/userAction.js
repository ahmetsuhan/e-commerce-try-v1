import { UserActionTypes } from "./userTypes";

// export const setCurrentUser = (user) => {
//   return {
//     type: UserActionTypes.SET_CURRENT_USER,
//     payload: user,
//   };
// };

/**
 * SAGA IMPLEMENTATION PART START
 */

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailAndPAssword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPAssword,
});

export const signInSuccess = (user) => {
  return {
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user,
  };
};

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

/**
 * SAGA IMPLEMENTATION PART END
 */
