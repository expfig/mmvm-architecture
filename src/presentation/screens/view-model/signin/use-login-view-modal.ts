import React, {useState} from 'react';
import {handleSigninWhithEmailAndPassword} from '../../../../domain/usecases/user-auth/user-auth-usecases';
import {handleGetUserInfo} from '../../../../domain/usecases/user-get-info/user-get-info';
import {useNavigation} from '@react-navigation/native';

interface LoginViewModal {
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setIsVisibilityPassword: React.Dispatch<React.SetStateAction<boolean>>;
  isVisibilityPasswords: boolean;
  setOnFocusedEmail: React.Dispatch<React.SetStateAction<boolean>>;
  onFocusedEmail: boolean;
  setOnFocusedPassword: React.Dispatch<React.SetStateAction<boolean>>;
  onFocusedPassword: boolean;
  isLoading: boolean;
  onSubmit: () => void;
}

const useLoginViewModel = (): LoginViewModal => {
  const {navigate} = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVisibilityPasswords, setIsVisibilityPassword] = useState(true);
  const [onFocusedEmail, setOnFocusedEmail] = useState(false);
  const [onFocusedPassword, setOnFocusedPassword] = useState(false);

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      // const response = await handleSigninWhithEmailAndPassword({
      //   email: email,
      //   password: password,
      // });
      const response = await handleGetUserInfo();
      console.log('response', response.data);
    } catch (error) {
      console.log('response', error);
    } finally {
      setIsLoading(false);
      //@ts-ignore
      navigate('FacialRecognitionView');
    }
  };

  /*
   * DATA BINDING WITH SCRREM
   */
  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    onSubmit,
    isVisibilityPasswords,
    setIsVisibilityPassword,
    setOnFocusedEmail,
    onFocusedEmail,
    setOnFocusedPassword,
    onFocusedPassword,
  };
};

/**
 * EXPORTS
 */
export {useLoginViewModel};
