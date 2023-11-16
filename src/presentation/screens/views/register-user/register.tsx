/**
 * IMPORTS
 */
import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  StyleSheet,
  Button,
  ScrollView
} from 'react-native';

import {TextNativeWs, InputWs} from 'ws-ui-components';


import {User, Eye, EyeSlash, Gear, UserCirclePlus, LockKey} from 'phosphor-react-native';

// hook-view-modal
import { useRegisterUserViewModel } from '../../view-model/register-user/use-login-view-modal';


const RegisterUserView = () => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    isLoading,
    onSubmit,
    setIsVisibilityPassword,
    isVisibilityPasswords,
    setOnFocusedUserName,
    onFocusedUsername,
    setOnFocusedPassword,
    onFocusedPassword,
  } = useRegisterUserViewModel();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <UserCirclePlus size={100} color="#7e1284" />
      </View>
      <View style={styles.header}>
        <TextNativeWs text="Cadastre-se" color={'#FFF'} fontWeight="600" />
        <TextNativeWs text="Para conversar com amigos(a) e ficar conectado ao mundo da tecnologia" color={'#FFF'} fontWeight="300" size={14} />
      </View>

      <View style={styles.input}>
        <InputWs
          name='name'
          height={50}
          heightWrapperIcon={50}
          heighBorderIconColor={onFocusedUsername ? '#7e1284' : '#cdcdcd80'}
          textLabel="Nome"
          textAlign="left"
          colorTextLabel="#6c757d"
          fontSize={18}
          fontWeight="500"
          onChangeText={setEmail}
          value={email}
          placeholder="Informe nome completo"
          borderWidth={onFocusedUsername ? 2 : 1}
          borderColor={onFocusedUsername ? '#7e1284' : '#cdcdcd80'}
          onFocus={() => setOnFocusedUserName(!onFocusedUsername)}
          onBlur={()=> {
            setOnFocusedUserName(false)
          }}
          borderRadius={4}
          paddingLeft={64}
        
          placeholderTextColor={'#cdcdcd80'}
          leftIconJsx={<User size={24} color="#6c757d" />}
        />
      </View>

      <View style={styles.input}>
        <InputWs
          name='username'
          height={50}
          heightWrapperIcon={50}
          heighBorderIconColor={onFocusedUsername ? '#7e1284' : '#cdcdcd80'}
          textLabel="Username"
          textAlign="left"
          colorTextLabel="#6c757d"
          fontSize={18}
          fontWeight="500"
          onChangeText={setEmail}
          value={email}
          placeholder="Informe seu usuário"
          borderWidth={onFocusedUsername ? 2 : 1}
          borderColor={onFocusedUsername ? '#7e1284' : '#cdcdcd80'}
          onFocus={() => setOnFocusedUserName(!onFocusedUsername)}
          onBlur={()=> {
            setOnFocusedUserName(false)
          }}
          borderRadius={4}
          paddingLeft={64}
          placeholderTextColor={'#cdcdcd80'}
          leftIconJsx={<User size={24} color="#6c757d" />}
        />
      </View>

      <View style={styles.input}>
        <InputWs
          name="profission"
          height={50}
          heightWrapperIcon={50}
          heighBorderIconColor={onFocusedUsername ? '#7e1284' : '#cdcdcd80'}
          textLabel="Profissão"
          textAlign="left"
          colorTextLabel="#6c757d"
          fontSize={18}
          fontWeight="500"
          onChangeText={setEmail}
          value={email}
          placeholder="Informe sua profissão"
          borderWidth={onFocusedUsername ? 2 : 1}
          borderColor={onFocusedUsername ? '#7e1284' : '#cdcdcd80'}
          onFocus={() => setOnFocusedUserName(!onFocusedUsername)}
          onBlur={()=> {
            setOnFocusedUserName(false)
          }}
          borderRadius={4}
          paddingLeft={64}
          placeholderTextColor={'#cdcdcd80'}
          leftIconJsx={<Gear size={24} color="#6c757d" />}
        />
      </View>

      <View style={styles.input}>
      <InputWs
          name='password'
          height={50}
          heightWrapperIcon={50}
          heighBorderIconColor={onFocusedPassword ? '#7e1284' : '#cdcdcd80'}
          textLabel="Senha"
          textAlign="left"
          colorTextLabel="#6c757d"
          fontSize={18}
          fontWeight="500"
          borderWidth={1}
          borderColor={onFocusedPassword ? '#7e1284' : '#cdcdcd80'}
          onFocus={() => setOnFocusedPassword(!onFocusedPassword)}
          onBlur={()=> setOnFocusedPassword(false)}
          borderRadius={4}
          paddingLeft={64}
          placeholder="***********"
          secureTextEntry={isVisibilityPasswords}
          visiblityPassword={isVisibilityPasswords}
          onChangeText={setPassword}
          value={password}
          placeholderTextColor={'#cdcdcd80'}
          leftIconJsx={<LockKey color="#FFFFFF" size={24}/>}
          right={0}
          rightIconPasswordJsx={ isVisibilityPasswords ? <EyeSlash color="#FFFFFF" size={24}/>:<Eye color="#FFFFFF" size={24}/> }
          onPressVisiblityPassword={()=> {
            setIsVisibilityPassword(!isVisibilityPasswords);
          }}
        />
      </View>

      <View>
        <TouchableOpacity
          onPress={onSubmit}
          disabled={isLoading}
          style={styles.button}>
          {isLoading ? (
            <TextNativeWs
              text="Carregando..."
              color={'#FFF'}
              fontWeight="500"
              size={16}
            />
          ) : (
            <TextNativeWs
              text="Criar novo usuário"
              color={'#FFF'}
              fontWeight="500"
              size={16}
            />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.wrapperCreateAccount}>
        <TouchableOpacity>
          <TextNativeWs
            text="Já possuo conta?"
            color={'#FFF'}
            fontWeight="300"
            size={14}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgb(26, 20, 31)',
  },
  logo: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20
  },
  header: {
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    width: '100%',
    height: 45,
    backgroundColor: '#7e1284',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: 16,
  },
  wrapperCreateAccount: {
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
/**
 * EXPORT
 */
export {RegisterUserView};
