import {act} from 'react-test-renderer';
import {renderHook} from '@testing-library/react-native';

import {useLoginViewModel} from '../use-login-view-modal';

describe('Teste da view-model de login.', () => {
  it('deve retornar valores padrão do view-model de login.', async () => {
    const {result} = renderHook(() => useLoginViewModel());

    expect(result.current.isLoading).toBe(false);

    expect(result.current.usuario).toBe('');
    expect(typeof result.current.setUsuario).toBe('function');

    expect(result.current.senha).toBe('');
    expect(typeof result.current.setSenha).toBe('function');

    expect(result.current.onFocusedEmail).toBe(false);
    expect(typeof result.current.setOnFocusedEmail).toBe('function');

    expect(result.current.onFocusedPassword).toBe(false);
    expect(typeof result.current.setOnFocusedPassword).toBe('function');
  });

  it('deve ser possivél fazer o onSubmit login do usuário.', () => {
    const {result} = renderHook(() => useLoginViewModel());

    act(() => {
      //chamando função que alterar um estado no react
      result.current.onSubmit();
    });
  });
});
