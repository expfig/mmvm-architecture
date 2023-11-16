import {ILoginDTO, IUserLoginResponse} from '../model/user';

interface IAuthUser {
  handleSigninWhithEmailAndPassword: ({
    email,
    password,
  }: ILoginDTO) => Promise<IUserLoginResponse>;

  handleUserGetInfo: () => Promise<any>;
}

export type {IAuthUser};
