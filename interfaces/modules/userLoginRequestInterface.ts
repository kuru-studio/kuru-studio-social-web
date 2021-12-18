export type userLoginRequestInterface = {
  data: {
    signinUser: {
      token: string;
      user: {
        id: string;
      };
    };
  };
}
