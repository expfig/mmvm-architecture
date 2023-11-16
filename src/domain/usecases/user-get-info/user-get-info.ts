/**
 * IMPORTS
 */

import {UserGetRepository} from '../../../data/repositories/user/user-get-repository';

const handleGetUserInfo = async () => {
  const data = await UserGetRepository.handleGetInfoUser();

  return data;
};

/**
 * EXPORTS
 */
export {handleGetUserInfo};
