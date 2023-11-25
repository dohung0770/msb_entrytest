import { Product } from "@/types";
import dumpProducts from '../payload/product'

export class ProductService {
  products: Product[] = dumpProducts
  
  getAll(): Product[] {
    return this.products
  }
  getById(productId: string): Product {
    const product = this.products.find(product => product.id === productId)

    if (!product) throw new Error('Product not found')

    return product
  }
}
