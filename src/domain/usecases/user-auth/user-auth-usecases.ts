/**
 * IMPORTS
 */
import {LoginDTO} from '../../dtos/user/user';
import {UserRepository} from '../../../data/repositories/user/user-repository';

const handleSigninWhithEmailAndPassword = async ({
  email,
  password,
}: LoginDTO) => {
  const data = await UserRepository.handleAuthUser({
    email,
    password,
  });

  return data;
};

/**
 * EXPORTS
 */
export {handleSigninWhithEmailAndPassword};
