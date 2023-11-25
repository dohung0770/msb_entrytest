/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserService } from './services/user.service'
import { ProductService } from './services/product.service'

const userService = new UserService()
const productService = new ProductService()

function fakeAsyncRequest(url: string, ...args: any[]) {
  console.log(`Requesting ${url}`, args)

  return async (context: any, fn: (...args: any[]) => any) => {
    const response = fn.bind(context, ...args)()

    return new Promise(resolve =>
      setTimeout(
        () => resolve(response),
        Math.random() * 3000
      )
    )
  }
}

export const fakeClient = {
  getAllProduct() {
    return fakeAsyncRequest(
      '/api/v3/products'
    )(productService, productService.getAll)
  },
  // signin({ username, password }: { username: string, password: string }) {
  //   return fakeAsyncRequest(
  //     '/api/v3/signin',
  //     username,
  //     password
  //   )(authService, authService.login)
  // },
  getUserById(userId: string) {
    return fakeAsyncRequest(
      '/api/v3/user',
      userId
    )(userService, userService.getById)
  }
}
