import { User } from "@/types"
import dumpUsers  from "../payload/users"

export class UserService {
  users: User[] = dumpUsers

  getAll() {
    return this.users
  }
  getById(userId: string): User {
    const user = this.users.find(user => user.id === userId)

    if (!user) throw new Error('User not found')

    return user
  }
  getByEmailOrUsername(data: string): User {
    const user = this.users.find(user => user.email === data || user.username === data)

    if (!user) throw new Error('User not found')

    return user
  }
}