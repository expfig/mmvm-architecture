/**
 * IMPORTS
 */
import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {
  User,
  Eye,
  EyeSlash,
  ChatCircleDots,
  LockKey,
} from 'phosphor-react-native';

// hook-view-modal
import {useLoginViewModel} from '../../view-model/signin/use-login-view-modal';

import {InputWs} from '../../../components/input/input';

import {handleGetAllProducts} from '../../../../domain/usecases/product/product-usecases';

const SigninView = () => {
  const {navigate} = useNavigation();
  const {
    email,
    password,
    setEmail,
    setPassword,
    isLoading,
    onSubmit,
    setIsVisibilityPassword,
    isVisibilityPasswords,
    setOnFocusedEmail,
    onFocusedEmail,
    setOnFocusedPassword,
    onFocusedPassword,
  } = useLoginViewModel();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{marginTop: 80}}>
        <View style={styles.logo}>
          <ChatCircleDots size={100} color="#7e1284" />

          <Text style={styles.textSocialFig}>Social Expfig</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.text_login}>Faça seu Login</Text>
        </View>

        <View style={styles.input}>
          <InputWs
            name="email"
            height={50}
            heightWrapperIcon={50}
            textLabel="E-mail"
            textAlign="left"
            colorTextLabel="#6c757d"
            fontSize={18}
            fontWeight="500"
            onChangeText={setEmail}
            value={email}
            placeholder="Digite seu e-mail"
            borderWidth={onFocusedEmail ? 2 : 1}
            borderColor={onFocusedEmail ? '#7e1284' : '#cdcdcd80'}
            onFocus={() => setOnFocusedEmail(!onFocusedEmail)}
            onBlur={() => {
              setOnFocusedEmail(false);
            }}
            borderRadius={4}
            paddingLeft={64}
            placeholderTextColor={'#cdcdcd80'}
            leftIconJsx={<User size={24} color="#6c757d" />}
          />
        </View>

        <View style={styles.input}>
          <InputWs
            name="password"
            height={50}
            heightWrapperIcon={50}
            textLabel="Senha"
            textAlign="left"
            colorTextLabel="#6c757d"
            fontSize={18}
            fontWeight="500"
            borderWidth={1}
            borderColor={onFocusedPassword ? '#7e1284' : '#cdcdcd80'}
            onFocus={() => setOnFocusedPassword(!onFocusedPassword)}
            onBlur={() => setOnFocusedPassword(false)}
            borderRadius={4}
            paddingLeft={64}
            placeholder="***********"
            secureTextEntry={isVisibilityPasswords}
            visiblityPassword={isVisibilityPasswords}
            onChangeText={setPassword}
            value={password}
            placeholderTextColor={'#cdcdcd80'}
            leftIconJsx={<LockKey color="#FFFFFF" size={24} />}
            right={0}
            rightIconPasswordJsx={
              isVisibilityPasswords ? (
                <EyeSlash color="#FFFFFF" size={24} />
              ) : (
                <Eye color="#FFFFFF" size={24} />
              )
            }
            onPressVisiblityPassword={() => {
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
              <Text style={styles.text_login}>Carregando...</Text>
            ) : (
              <Text style={styles.text_login}>Login</Text>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.wrapperCreateAccount}>
          {/**@ts-ignore */}
          <TouchableOpacity onPress={() => navigate('RegisterUserView')}>
            <Text style={styles.text_login}>Ainda não possui conta?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  textSocialFig: {
    color: '#fff',
    fontWeight: '600',
    marginTop: 6,
    fontSize: 26,
  },
  logo: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 80,
  },
  header: {
    marginBottom: 16,
  },
  text_login: {
    color: '#fff',
    fontWeight: '400',
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
  textCreateAccount: {
    color: '#fff',
    fontWeight: '300',
    fontSize: 14,
  },
});
/**
 * EXPORT
 */
export {SigninView};
