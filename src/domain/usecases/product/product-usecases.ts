/**
 * IMPORTS
 */
import {ProductRepository} from '../../../data/repositories/product/product';

const handleGetAllProducts = async () => {
  // ui -> adpaters -> use-cases -> repository -> interface(contract)

  const repositories = new ProductRepository();

  const data = await repositories.findAllProducts();

  return data;
};

/**
 * EXPORTS
 */
export {handleGetAllProducts};
