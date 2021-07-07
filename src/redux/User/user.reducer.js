import userTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  userData: {},
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload.id,
        userData: {
          displayName: action.payload.displayName,
          photoURL: action.payload.photoURL,
          email: action.payload.email,
        },
      };

    case userTypes.SIGN_OUT_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default userReducer;
