// repositories/ProductRepository.ts
import {ProductRepositoryContract} from '../../interface/products';

import {ProductModel} from '../../model/produtuct'; // Supondo que você tenha uma implementação de ProductModel
import AxiosService from '../../infra/http/axios/axios-client';

/**
 * Repositorio de Product
 */
class ProductRepository implements ProductRepositoryContract {
  private products: ProductModel[] = [];
  private httpClient = AxiosService.createAxiosInstance();

  /**
   * Buscar pelo id de um produto especifico.
   *  @param id
   */
  findByIdProduct(id: number): ProductModel | null {
    return this.products.find(product => product.id === id) || null;
  }

  /**
   * Buscar todos produtos
   */
  async findAllProducts(): Promise<ProductModel[] | any> {
    const products = await (
      await this.httpClient
    ).get<ProductModel[]>('products', {
      headers: {'content-type': 'application/json'},
    });

    return products;
  }

  /**
   * Criação de um novo produto
   * @param product
   */
  async createOneProduct(product: ProductModel): Promise<void> {
    this.products.push(product);
  }

  /**
   * Atualizar propiedade de um produto especifo como nome,preco etc...
   * @param id
   * @param updatedProduct
   */
  async updateProduct(id: number, updatedProduct: ProductModel): Promise<void> {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }

  /**
   * Excluir apenas um produto.
   * @param id
   */
  async deleteProduct(id: number): Promise<void> {
    this.products = this.products.filter(product => product.id !== id);
  }
}

export {ProductRepository};
