export interface UserLoginRequestType {
  data: {
    signinUser: {
      token: string;
      user: {
        id: string;
      };
    };
  };
}
