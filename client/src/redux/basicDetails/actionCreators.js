import { JSON_API } from "../../url";
import {
  BASIC_DETAILS_ERROR,
  BASIC_DETAILS_LOADING,
  BASIC_DETAILS_SUCCESS,
} from "./actionTypes";

export const basicDetailsIsLoading = () => {
  return {
    type: BASIC_DETAILS_LOADING,
  };
};

export const basicDetailsIsSuccess = (data) => {
  return {
    type: BASIC_DETAILS_SUCCESS,
    payload: data,
  };
};

export const basicDetailsIsError = (e) => {
  return {
    type: BASIC_DETAILS_ERROR,
    payload: e,
  };
};

export const postBasicDetails = (userData) => (dispatch) => {
  try {
    fetch(`${JSON_API}/userDetails`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((e) => e.json())
      .then((res) => {
        console.log("userDetail",res)
      });
  } catch (e) {
    alert("Could not post data");
    console.log("error in posting Data", e);
  }
};

export const getBasicDetails = (userData) => (dispatch) => {
  try {
    dispatch(basicDetailsIsLoading());

    fetch(`${JSON_API}/userDetails`)
      .then((e) => e.json())
      .then((res) => {
        dispatch(basicDetailsIsSuccess(res));
      });
  } catch (e) {
    dispatch(basicDetailsIsError(e));
  }
};
