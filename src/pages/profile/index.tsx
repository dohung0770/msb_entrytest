import { NavLink, Outlet } from "react-router-dom";
import { Breadcrumb, List } from "antd";
import { FileTextIcon, LogoutIcon, UserIcon } from "@/assets/icons";
import { useAuth } from "@/hooks";
import { Suspense } from "react";

export default function Profile() {
  const { signOut } = useAuth()

  return (
    <div className="account_section">
      <Breadcrumb
        items={[
          {
            title: 'Trang chủ',
          },
          {
            title: <a href="">Quản lý tài khoản</a>,
          },
        ]}
      />

      <div className="as_content">
        <List
          header={<div>Minh Ngoc</div>}
        >
          <List.Item>
            <NavLink to='/profile/info'>
              <UserIcon />
              <span>Thông tin tài khoản</span>
            </NavLink>
          </List.Item>

          <List.Item>
            <NavLink to='/profile/products'>
              <FileTextIcon />
              <span>Thông tin sản phẩm</span>
            </NavLink>
          </List.Item>

          <List.Item>
            <NavLink to='/signout' onClick={e => {
              e.preventDefault()

              signOut()
            }}>
              <LogoutIcon />
              <span>Đăng xuất</span>
            </NavLink>
          </List.Item>
        </List>

        <Suspense fallback={<p>Loading ...</p>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}