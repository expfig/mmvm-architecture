import {useState} from 'react';

import {useNavigation} from '@react-navigation/native';

import { LoginViewModal } from './interface';
import { UserAuth } from '../../../../presentation/hooks/user-auth/user-auth';


const useLoginViewModel = (): LoginViewModal => {
  const {navigate} = useNavigation();
  const { login }= UserAuth()

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [isVisibilityPasswords, setIsVisibilityPassword] = useState(true);
  
  const [onFocusedEmail, setOnFocusedEmail] = useState(false);
  const [onFocusedPassword, setOnFocusedPassword] = useState(false);

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      await login({usuario, senha})
      
    //@ts-ignore
      navigate('HomeView');
    } catch (error) {
      new Error("Falha ao fazer login!")
    } finally {
      setIsLoading(false);
    }
  };

  /*
   * DATA BINDING WITH SCRREM
   */
  return {
    usuario,
    setUsuario,
    senha,
    setSenha,
    isLoading,
    onSubmit,
    isVisibilityPasswords,
    setIsVisibilityPassword,
    setOnFocusedEmail,
    onFocusedEmail,
    setOnFocusedPassword,
    onFocusedPassword,
    navigate
  };
};

/**
 * EXPORTS
 */
export {useLoginViewModel};
