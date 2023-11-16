/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable no-param-reassign */
/**
 * IMPORTS
 */

import Axios, {type AxiosRequestConfig} from 'axios';
import {configAxios} from '../../../config/axios-config';

// instància do axios
const createAxiosInstance = async (accessToken?: string) => {
  // criando a configuração do axios
  const instance = Axios.create(configAxios);

  // setando token para todas as requisiç��es feita com axios
  instance.interceptors.request.use((value: AxiosRequestConfig | any) => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (accessToken) {
      value.headers = {Authorization: `Bearer ${accessToken}`};
    }
    return value;
  });

  instance.interceptors.response.use(
    // caso aconteça algum error com a requisição o axios vai lançar o error
    (value: AxiosRequestConfig | any) => {
      if (value.data?.errors?.length) {
        throw new Error(value.data?.errors);
      } else {
        return value;
      }
    },

    // Validando quais tipos de errors o axios está retornando
    async (error: any) => {
      // usuário está sem internet
      if (error?.message === 'Network Error') {
        console.log('Error: ' + error);
        throw new Error(
          'Sem conexão com a internet, tente novamente mais tarde!',
        );
      }

      // servidor demorando muito para responder
      if (error.code === 'ECONNABORTED') {
        throw new Error(
          'Nosso servidor demorou muito tempo para responder, tente novamente mais tarde!',
        );
      }

      // token expirado
      if (error?.response?.status === 401) {
        // get new token method
        throw new Error(
          'Usuário não possui autorização, tente novamente mais tarde!',
        );
      }

      // usuário não tem permissão para acessar endpoit
      if (error?.response?.status === 403) {
        throw new Error(error?.response?.data?.message);
      }

      // indica que o servidor não conseguiu processar a solicitação devido a informações inválidas enviadas pelo cliente.
      if (error?.response?.status === 400) {
        throw new Error(error?.response?.data?.message);
      }

      // indica que o servidor entende o tipo de conteúdo da entidade da requisição,
      // e a sintaxe da requisição esta correta, mas não foi possível processar as instruções presentes.
      if (error?.response?.status === 422) {
        throw new Error(error?.response?.data?.message);
      }

      // qualquer outro error desconhecido iremos lançar
      if (error?.response?.data?.errors?.length) {
        throw new Error(error.response.data.errors[0]);
      }
      return error;
    },
  );

  return instance;
};

/**
 * EXPORTS
 */
export default {
  createAxiosInstance,
};
