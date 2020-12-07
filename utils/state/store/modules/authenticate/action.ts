import {
  AUTHENTICATE,
  AuthenticateActionPayload,
  AuthenticateActionTypes,
} from './types';

export function authenticate(
  token: AuthenticateActionPayload,
): AuthenticateActionTypes {
  return {
    type: AUTHENTICATE,
    payload: token,
  };
}
