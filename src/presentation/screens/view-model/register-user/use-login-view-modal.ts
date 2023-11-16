import React, {useState} from 'react';
import {handleSigninWhithEmailAndPassword} from '../../../../domain/usecases/user-auth/user-auth-usecases';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {handleUserNewCreate} from '../../../../domain/usecases/user-new-create/user-new-create-usecases';

interface LoginViewModal {
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setIsVisibilityPassword: React.Dispatch<React.SetStateAction<boolean>>;
  isVisibilityPasswords: boolean;
  setOnFocusedUserName: React.Dispatch<React.SetStateAction<boolean>>;
  onFocusedUsername: boolean;
  setOnFocusedPassword: React.Dispatch<React.SetStateAction<boolean>>;
  onFocusedPassword: boolean;
  isLoading: boolean;
  onSubmit: () => void;
}

const useRegisterUserViewModel = (): LoginViewModal => {
  const {navigate} = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVisibilityPasswords, setIsVisibilityPassword] = useState(false);
  const [onFocusedUsername, setOnFocusedUserName] = useState(false);
  const [onFocusedPassword, setOnFocusedPassword] = useState(false);

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await handleUserNewCreate({
        email: email,
        password: password,
      });
      console.log('response', response);
    } catch (error) {
      Alert.alert('Error', 'Algo no cadastro errado tente novamnete');
    } finally {
      setIsLoading(false);
      //@ts-ignore
      navigate('HomeView');
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
    setOnFocusedUserName,
    onFocusedUsername,
    setOnFocusedPassword,
    onFocusedPassword,
  };
};

/**
 * EXPORTS
 */
export {useRegisterUserViewModel};
