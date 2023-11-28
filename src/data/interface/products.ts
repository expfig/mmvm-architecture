import {ProductModel} from '../model/produtuct';

// repositories/ProductRepositoryContract.ts
interface ProductRepositoryContract {
  findById(id: number): ProductModel | null;
  findAll(): Promise<ProductModel[]>;
  create(product: ProductModel): void;
  update(id: number, updatedProduct: ProductModel): void;
  delete(id: number): void;
}

export type {ProductRepositoryContract};
