// ANCHOR: Redux Imports
import { reduxStore } from '@state/store';
import { userTokenAction } from '@state/actions';

// ANCHOR: Utilities
import { clearCookie } from "@utilities/index";
import { checkWindowObject } from "@utilities/index";

export function clearUserToken() {
  if (checkWindowObject) {
    clearCookie("userToken");
  }
  reduxStore.dispatch(userTokenAction(null));
}
