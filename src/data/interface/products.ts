import {ProductModel} from '../model/produtuct';

// repositories/ProductRepositoryContract.ts
interface ProductRepositoryContract {
  findByIdProduct(id: number): ProductModel | null;
  findAllProducts(): Promise<ProductModel[]>;
  createOneProduct(product: ProductModel): Promise<void>;
  updateProduct(id: number, updatedProduct: ProductModel): Promise<void>;
  deleteProduct(id: number): Promise<void>;
}

export type {ProductRepositoryContract};
