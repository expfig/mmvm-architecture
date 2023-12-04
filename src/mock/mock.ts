/**
 *IMPORTS
 */
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


const mockAxios = new MockAdapter(axios);



/**
 * EXPORTS
 */
export const mock = {
  mockAxios
}