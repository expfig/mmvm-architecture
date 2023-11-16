/**
 * IMPORTS
 */

interface LoginDTO {
  email: string;
  password: string;
}

type IUserDataResponseProps = {
  id: string;
  name: string;
  email: string;
  avatar: string;
};

/**
 * EXPORTS
 */
export {LoginDTO, IUserDataResponseProps};
