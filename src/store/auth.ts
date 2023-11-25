import { User } from "@/types";
import { atom, selector } from "recoil";

type Auth = {
  isAuthenticated: boolean
  user: User | null
}

export const authAtom = atom<Auth>({
  key: 'auth',
  default: selector({
    key: 'auth/default',
    get() {
      const accessToken = localStorage.getItem('access_token')
      const storedUser = JSON.parse(localStorage.getItem('stored_user') || '{}') as User

      if (!accessToken || !storedUser?.id)
      return {
        isAuthenticated: false,
        user: null
      }

      return {
        isAuthenticated: true,
        user: storedUser
      }
    }
  })
})
