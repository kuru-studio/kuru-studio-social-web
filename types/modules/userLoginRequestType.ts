export interface userLoginRequestType {
  data: {
    signinUser: {
      token: string;
      user: {
        id: string;
      };
    };
  };
}
