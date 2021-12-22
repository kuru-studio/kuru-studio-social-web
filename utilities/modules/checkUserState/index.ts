// ANCHOR: Redux Imports
import { reduxStore } from '@state/store';
import { userTokenAction } from '@state/actions';

// ANCHOR: Utilities
import { getCookie } from "@utilities/index";
import { checkWindowObject } from "@utilities/index";

export function checkUserState() {
  if (checkWindowObject) {
    const userTokenCookie: string = getCookie("userToken");
    if (userTokenCookie != "") {
      reduxStore.dispatch(userTokenAction(userTokenCookie));
    }
  }
}
