import {API_AXIOS_CLIENT} from '../../../data/infra/http/axios/axios-client';
import {LoginDTO, IUserDataResponseProps} from '../../dtos/user/user';

const handleUserNewCreate = async ({email, password}: LoginDTO) => {
  const {data} = await API_AXIOS_CLIENT.post<IUserDataResponseProps>(
    '/api/v1/user',
    {
      email,
      password,
    },
  );

  return data;
};

/**
 * EXPORTS
 */
export {handleUserNewCreate};
