// ANCHOR: State
type Token = string | null;

export type AuthenticateState = Token;

// ANCHOR: Actions
export const AUTHENTICATE = 'AUTHENTICATE';

export type AuthenticateActionPayload = Token;

interface AuthenticateAction {
  type: typeof AUTHENTICATE;
  payload: Token;
}

export type AuthenticateActionTypes = AuthenticateAction;
