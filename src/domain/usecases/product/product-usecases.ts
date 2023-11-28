/**
 * IMPORTS
 */
import {LoginDTO} from '../../dtos/user/user';
import {ProductRepository} from '../../../data/repositories/product/product';

const handleGetAllProducts = async () => {
  const repositories = new ProductRepository();

  const data = await repositories.findAll();

  console.log('todos os produtos=>', data);

  return data;
};

/**
 * EXPORTS
 */
export {handleGetAllProducts};
