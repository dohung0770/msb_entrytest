import { useNavigate } from "react-router-dom"
import { useSetRecoilState } from "recoil"
import { authAtom } from "@/store"
import { client } from "@/lib/http"

export function useAuth() {
  const navigate = useNavigate()
  const setAuth = useSetRecoilState(authAtom)

  const signIn = async ({ username, password }: { username: string, password: string }) => {
    try {
      return client.post('/services/login', { username, password })
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      throw new Error((error as any)?.message)
    }
  }

  const signOut = async () => {
    navigate('/')

    setAuth({
      isAuthenticated: false,
      user: null
    })

    localStorage.removeItem('access_token')
    localStorage.removeItem('stored_user')

  }

  return { signIn, signOut }
}
