// ANCHOR: Redux Imports
import { reduxStore } from '@state/store';
import { userTokenAction } from '@state/actions';

// ANCHOR: Utilities
import { setCookie } from "@utilities/cookie";
import { checkWindowObject } from "@utilities/checkWindowObject";

export function setUserToken(token: string) {
  if (checkWindowObject) {
    setCookie("userToken", token, process.env.COOKIE_DURATION);
  }
  reduxStore.dispatch(userTokenAction(token));
}
