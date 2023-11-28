// repositories/ProductRepository.ts
import {ProductRepositoryContract} from '../../interface/products';

import {ProductModel} from '../../model/produtuct'; // Supondo que você tenha uma implementação de ProductModel

class ProductRepository implements ProductRepositoryContract {
  private products: ProductModel[] = [];

  findById(id: number): ProductModel | null {
    return this.products.find(product => product.id === id) || null;
  }

  async findAll(): Promise<ProductModel[]> {
    const product = this.products;

    return product;
  }

  create(product: ProductModel): void {
    this.products.push(product);
  }

  update(id: number, updatedProduct: ProductModel): void {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }

  delete(id: number): void {
    this.products = this.products.filter(product => product.id !== id);
  }
}

export {ProductRepository};
