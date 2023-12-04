import {act} from 'react-test-renderer';
import {renderHook, waitFor} from '@testing-library/react-native';

import {UserAuth} from './user-auth';
import {mock} from '../../../mock/mock';

describe('Teste para hook de Autenticação do usuário.', () => {
  it('deve retornar valores padrão do hook.', async () => {
    const {result} = renderHook(() => UserAuth());
    expect(result.current.user).toBe(null);
    expect(result.current.isAuthenticated).toBe(false);
    expect(typeof result.current.login).toBe('function');
    expect(typeof result.current.logout).toBe('function');
  });

  it('isAuthenticated é verdadeiro e o usuário contém informações completas quando o login foi chamado.', async () => {
    const {result} = renderHook(() => UserAuth());

    //fazendo mock da chamada api
    mock.mockAxios
      .onPost('http://grupofigueiredo.com.br:1111/jornada_mobile/login')
      .reply(200, {
        data: {
          gr_pessoa_id: 1,
          nome: 'Dev Loko',
          token_auth: 'token',
        },
      });

    act(() => {
      //chamando função que alterar um estado no react
      result.current.login({usuario: 'dev.sousa', senha: '123456'});
    });

    await waitFor(() => {
      expect(result.current.user).toMatchObject({
        gr_pessoa_id: 1,
        nome: 'Dev Loko',
        token_auth: 'token',
      });
    });
    expect(result.current.isAuthenticated).toBe(true);
  });

  it('isAuthenticated ser falso e user ser nulo quando o logout foi chamado.', () => {
    const {result} = renderHook(() => UserAuth());

    act(() => {
      result.current.logout();
    });

    expect(result.current.user).toBe(null);
    expect(result.current.isAuthenticated).toBe(false);
  });
});
