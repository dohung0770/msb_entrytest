import { authAtom } from "@/store";
import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";

export function SecuredRoute() {
  const { isAuthenticated, user } = useRecoilValue(authAtom)

  if (!user?.id) {
    <Navigate to='/' />
  }

  if (!isAuthenticated) {
    return <Navigate to='/not-found' />
  }

  return <Outlet />
}