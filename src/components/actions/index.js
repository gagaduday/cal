import * as types from "../types";

export const calculate = expression => {
  return {
    type: types.SET_EXPRESSION,
    payload: expression
  };
};
