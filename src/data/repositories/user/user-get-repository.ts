/**
 * IMPORTS
 */
import {type ILoginDTO} from '../../model/user';

import AxiosService from '../../infra/http/axios/axios-client';
import {IAuthUser} from '../../interface/user-auth';
/**
 * IMPORTS
 */

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

const UserGetRepository = {
  handleGetInfoUser,
};

/**
 * EXPORTS
 */
export {UserGetRepository};
