/**
 * IMPORTS
 */
import {type ILoginDTO} from '../../model/user';

import AxiosService from '../../infra/http/axios/axios-client';
import {IAuthUser} from '../../interface/user-auth';
/**
 * IMPORTS
 */

// autenticação de usuário
const handleAuthUser = async ({email, password}: ILoginDTO) => {
  const Instance = AxiosService.createAxiosInstance();

  const responseAuth = await (
    await Instance
  ).post(
    `login`,
    {
      email: 'LUCELIO.LAGE@MOTORISTAFIGUEIREDO.COM.BR',
      password: 'sgt20@ef',
    },
    {
      headers: {'content-type': 'application/json'},
    },
  );
  return responseAuth;
};

// buscar dadps do usuário
const handleGetInfoUser = async () => {
  const Instance = AxiosService.createAxiosInstance();

  const responseAuth = await (
    await Instance
  ).get('teste', {
    headers: {'content-type': 'application/json'},
  });
  return responseAuth;
};

const UserRepository = {
  handleAuthUser,
  handleGetInfoUser,
} as any;

/**
 * EXPORTS
 */
export {UserRepository};
