/**
 * IMPORTS
 */
import {IUserLoginResponse} from '@data/model/user';
import React, {ReactNode} from 'react';
interface IAuthUserProps {
  username: string;
  password: string;
}

import {ILoginDTO} from 'src/dtos/user-login';

type IAuthContextData = {
  /** date user  */
  user: any;
  isAuthenticated: boolean;
  login: ({username, password}: IAuthUserProps)=>Promise<void>;
  logout: ()=> void
};

type IAuthProviderProps = {
  children: ReactNode;
  
};

/**
 * EXPORTS
 */
export {IAuthContextData, IAuthProviderProps};