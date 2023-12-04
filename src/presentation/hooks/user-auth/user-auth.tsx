import {createContext, useState} from 'react';

import axios from 'axios';
import {IAuthContextData} from './index';

interface IAuthUserProps {
  usuario: string;
  senha: string;
}

interface IUserProps {
  gr_pessoa_id: number;
  nome: string;
  token_auth: string;
}

// create conetxt
const UserAuthContext = createContext({} as IAuthContextData);

const UserAuth = () => {
  const [user, setUser] = useState<IUserProps | null>(null);

  const isAuthenticated = !!user;

  const login = async ({usuario, senha}: IAuthUserProps) => {
    const response = await axios.post(
      'http://grupofigueiredo.com.br:1111/jornada_mobile/login',
      {
        usuario,
        senha,
      },
    );

    setUser(response.data.data);
    return;
  };

  const logout = () => {
    //removendo cookies
    //removendo os dados do Storage;

    setUser(null);
    return;
  };
  return {
    user,
    isAuthenticated,
    login,
    logout,
  };
};

export {UserAuth};
