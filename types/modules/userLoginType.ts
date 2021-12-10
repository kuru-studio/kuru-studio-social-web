export interface UserLoginType {
  data: {
    signinUser: {
      token: string;
      user: {
        id: string;
      };
    };
  };
}
