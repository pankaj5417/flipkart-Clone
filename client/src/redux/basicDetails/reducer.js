import {
  BASIC_DETAILS_LOADING,
  BASIC_DETAILS_SUCCESS,
  BASIC_DETAILS_ERROR,
} from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  userDetails:[],
};

export const BasicDetailsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case BASIC_DETAILS_LOADING:
      return { isLoading: true, isError: false, details: {} };
    case BASIC_DETAILS_SUCCESS:
      return { isLoading: false, isError: false, userDetails: payload };
    case BASIC_DETAILS_ERROR:
      return { isLoading: false, isError: true, details: {} };
    default:
      return state;
  }
};
