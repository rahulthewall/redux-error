import { StateStub } from '../../types/common';

export interface I_Code {
  code: string;
}

export interface I_User {
  employeeId: string;
  email: string;
  name: string;
  accessToken: string;
}

export interface I_UserState {
  loginUser: StateStub & {
    data?: I_User;
  };
  refreshUser: StateStub & {
    data?: I_User;
  };
}
