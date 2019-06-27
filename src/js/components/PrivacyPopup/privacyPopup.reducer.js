import {
  UPDATE_USER_FLAG,
  UPDATE_USER_FLAG_SUCCESS,
  UPDATE_USER_FLAG_FAILURE,
} from '../../helpers/actionConstants';

export default function userFlag(state = {
  updatingUserFlag: false,
  updatedUserFlag: false,
  userFlag: null,
  userFlagError: null,
}, action) {
  switch (action.type) {
    case UPDATE_USER_FLAG:
      return {
        ...state,
        updatingUserFlag: true,
        updatedUserFlag: false,
        userFlag: null,
        userFlagError: null,
      };
    case UPDATE_USER_FLAG_SUCCESS:
      return {
        ...state,
        updatingUserFlag: false,
        updatedUserFlag: true,
        userFlag: action.payload,
        userFlagError: null,
      };
    case UPDATE_USER_FLAG_FAILURE:
      return {
        ...state,
        updatedUserFlag: false,
        userFlagError: action.payload,
        updatingUserFlag: false,
        userFlag: null,
      };
    default:
      return state;
  }
}
