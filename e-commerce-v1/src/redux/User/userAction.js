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

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

/**
 * SAGA IMPLEMENTATION PART END
 */
