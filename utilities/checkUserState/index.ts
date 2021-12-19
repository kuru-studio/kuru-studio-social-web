// ANCHOR: Redux Imports
import { reduxStore } from '@state/store';
import { userTokenAction } from '@state/actions';

// ANCHOR: Utilities
import { getCookie } from "@utilities/cookie";
import { checkWindowObject } from "@utilities/checkWindowObject";

export function checkUserState() {
  if (checkWindowObject) {
    const userTokenCookie: string = getCookie("userToken");
    if (userTokenCookie != "") {
      reduxStore.dispatch(userTokenAction(userTokenCookie));
    }
  }
}
