import { Avatar, Button, Dropdown, Layout, Menu, MenuProps, Space } from "antd";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Link, useNavigate } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons'
import { DownIcon, PhoneIcon } from "@/assets/icons";
import { authAtom, loginAtom, supportationAtom } from "@/store";
import { useAuth, useProductsData } from "@/hooks";
import { Product } from "@/types";

function getMenuItems(data: Product[]): MenuProps['items'] {
  return data.map(product => ({
    label: product.name,
    key: product.id,
    children: product?.subProducts ? getMenuItems(product.subProducts) : undefined
  }))
}

export function Header() {
  const navigate = useNavigate()

  const startLoggingIn = useSetRecoilState(loginAtom)
  const requestSupportation = useSetRecoilState(supportationAtom)
  const { isAuthenticated, user } = useRecoilValue(authAtom)
  const { signOut } = useAuth()
  const { products = [] } = useProductsData()

  const menuItems: MenuProps['items'] = [
    {
      label: 'Sản phẩm',
      key: 'products',
      children: getMenuItems(products),
    },
    {
      label: 'So sánh',
      key: 'comparision'
    },
    {
      label: 'Câu hỏi thường gặp',
      key: 'commonQuestions'
    }
  ]

  if (!isAuthenticated) {
    menuItems.push({
      label: "Đăng nhập",
      key: 'signin',
      onClick: () => startLoggingIn(true)
    })
  }

  menuItems.push({
    label: '1900 6083',
    icon: <PhoneIcon />,
    key: 'contact'
  })

  const fullName = user?.firstName + ' ' + user?.lastName

  return (
    <Layout.Header>
      <Link to='/' className="logo flex items-center">
        <img src='/img/Logo.png' alt="logo" />
      </Link>

      <div className="right flex">
        <Menu
          items={menuItems}
          mode="horizontal"
          style={{ minWidth: 0, flex: "auto" }} />

        <Button onClick={() => requestSupportation(true)}>Yêu cầu tư vấn</Button>

        {isAuthenticated && user && (
          <>
            <div className="divider"></div>

            <Dropdown menu={{
              items: [
                {
                  label: 'Quản lý tài khoản',
                  key: 'manageAccount',
                  onClick: () => navigate('/profile')
                },
                {
                  label: 'Đăng xuất',
                  key: 'signOut',
                  onClick: () => signOut()
                }
              ]
            }}>
              <a onClick={(e) => e.preventDefault()} className="user-avatar">
                <Space>
                  <Avatar icon={<UserOutlined />} src={user?.image} />
                  {fullName}
                  <DownIcon />
                </Space>
              </a>
            </Dropdown>
          </>
        )}
      </div>
    </Layout.Header>
  )
}
