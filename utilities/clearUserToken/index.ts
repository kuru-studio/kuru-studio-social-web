// ANCHOR: Redux Imports
import { reduxStore } from '@state/store';
import { userTokenAction } from '@state/actions';

// ANCHOR: Utilities
import { setCookie } from "@utilities/cookie";
import { checkWindowObject } from "@utilities/checkWindowObject";

export function clearUserToken() {
  if (checkWindowObject) {
    setCookie("userToken", "", 0);
  }
  reduxStore.dispatch(userTokenAction(null));
}
