// ANCHOR: Cookie Import
import { setCookie } from "./setCookie";

// ANCHOR: Clear Cookie
// DOCS: https://www.w3schools.com/js/js_cookies.asp
export function clearCookie(cname) {
  setCookie(cname, "", 0);
};
