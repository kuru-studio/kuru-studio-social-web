export type userLoginRequestResultInterface = {
  data: {
    signinUser: {
      token: string;
      user: {
        id: string;
      };
    };
  };
}
