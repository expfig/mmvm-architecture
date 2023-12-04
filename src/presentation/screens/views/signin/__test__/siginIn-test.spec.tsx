/**
 * IMPORTS
 */
import React from 'react';

import {render, fireEvent} from '@testing-library/react-native';

import {SigninView} from '../signin';
import {TEST_ID} from '../../../../../common/constants/testId/test-id';

describe('Teste para tela de Login', () => {
  it('Deve ser possível renderizar a tela de login do usuário.', () => {
    render(<SigninView />);
  });

  it('deve ser possivél encontar a Logo e Titulo do app.', () => {
    const {getByTestId} = render(<SigninView />);

    const elementLogo = getByTestId(TEST_ID.logoSignin);

    expect(elementLogo).toBeTruthy();
  });

  it('Deve ser possível simular a interação do usuário com input usuário.', () => {
    // Renderize o componente com a função mock
    const {getByPlaceholderText} = render(<SigninView />);

    // Encontre a entrada por espaço reservado e simule uma alteração de texto
    const inputEmailElement = getByPlaceholderText('Digite seu usuário');

    // Simule a interação do usuário com a entrada ao digitar
    fireEvent.changeText(inputEmailElement, 'Dev.Loko');

    // Verifique se a função handleInputChange foi chamada com os argumentos corretos
    expect(inputEmailElement.props.value).toBe('Dev.Loko');
  });

  it('Deve ser possível simular a interação do usuário com input senha.', () => {
    // Renderize o componente com a função mock
    const {getByPlaceholderText} = render(<SigninView />);

    // Encontre a entrada por espaço reservado e simule uma alteração de texto
    const inputPasswordElement = getByPlaceholderText('***********');

    // Simule a interação do usuário com a entrada ao digitar
    fireEvent.changeText(inputPasswordElement, '12345678');

    // Verifique se a função handleInputChange foi chamada com os argumentos corretos
    expect(inputPasswordElement.props.value).toBe('12345678');
  });

  it('Deve ser possível clilcar no botão e fazer login de', () => {
    const {getByTestId, getByText} = render(<SigninView />);

    const elementButton = getByTestId(TEST_ID.buttonSign);

    const textLogin = getByText('Login');

    // //precisionar o botão de login para a authentição do usuári.
    fireEvent.press(elementButton);

    expect(textLogin).toBeTruthy();
  });
});
