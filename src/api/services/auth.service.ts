import { User } from "@/types"
import dumpUsers  from "../payload/users"
import { UserService } from "./user.service"

export class AuthService {
  users: User[] = dumpUsers
  userService = new UserService()

  login(username: string, password: string): { accessToken: string, user: User } {
    const user = this.userService.getByEmailOrUsername(username)

    if (!user || user.password !== password)
      throw new Error('Credential does not match')

    delete user.password

    return { accessToken: user.id, user } // Fake access token
  }

  logout() {
    return {
      message: 'Signed out!'
    }
  }
}
