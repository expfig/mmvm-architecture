/**
 * IMPORTS
 */
import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';

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

import {TEST_ID} from '../../../../common/constants/testId/test-id';

import {styles} from './styles';

const SigninView = () => {
  const {
    usuario,
    setUsuario,
    senha,
    setSenha,
    isLoading,
    onSubmit,
    setIsVisibilityPassword,
    isVisibilityPasswords,
    setOnFocusedEmail,
    onFocusedEmail,
    setOnFocusedPassword,
    onFocusedPassword,
    navigate,
  } = useLoginViewModel();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{marginTop: 80}}>
        {/**LOGO */}
        <View testID={TEST_ID.logoSignin} style={styles.logo}>
          <ChatCircleDots size={100} color="#7e1284" />

          <Text style={styles.textSocialFig}>Social Expfig</Text>
        </View>

        {/**HEADER */}
        <View style={styles.header}>
          <Text style={styles.text_login}>Faça seu Login</Text>
        </View>

        {/**INPUTS */}
        <View style={styles.input}>
          <InputWs
            testID="usuario-input"
            name="usuario"
            height={50}
            heightWrapperIcon={50}
            textLabel="Usuario"
            textAlign="left"
            colorTextLabel="#6c757d"
            fontSize={18}
            fontWeight="500"
            onChangeText={setUsuario}
            value={usuario}
            placeholder="Digite seu usuário"
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
            testID="senha-input"
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
            onChangeText={setSenha}
            value={senha}
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

        {/**ACTION LOGIN */}
        <View>
          <TouchableOpacity
            testID={TEST_ID.buttonSign}
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

        {/**FOOTER */}
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

/**
 * EXPORT
 */
export {SigninView};
