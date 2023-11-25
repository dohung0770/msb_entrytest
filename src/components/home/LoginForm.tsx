import { useState } from "react";
import { Button, Form, Input, Modal, ModalProps, notification } from "antd";
import { useSetRecoilState } from "recoil";
import { authAtom, loginAtom } from "@/store";
import { useAuth } from "@/hooks";

type SigninData = {
  username: string
  password: string
}

type AuthResponse = {
  id: 15,
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  token: string
}

export function LoginForm(props: ModalProps) {
  const setAuth = useSetRecoilState(authAtom)
  const setLogin = useSetRecoilState(loginAtom)

  const { signIn } = useAuth()

  const [isSigningIn, setIsSigningIn] = useState(false)

  const onFinish = async (values: SigninData) => {
    setIsSigningIn(true)

    try {
      const { token, ...user } = await signIn(values) as unknown as AuthResponse

      localStorage.setItem('access_token', JSON.stringify(token))
      localStorage.setItem('stored_user', JSON.stringify(user))

      setAuth(auth => ({
        ...auth,
        isAuthenticated: true,
        user
      }))

      notification.success({
        message: 'Success',
        description: 'You logged in!'
      })

      setLogin(false)
    } catch (error) {
      notification.error({
        message: 'Error',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        description: (error as any)?.message
      })
    } finally {
      setIsSigningIn(false)
    }
  };

  return (
    <Modal footer={null} centered maskClosable={false} width={343} closable={false} {...props}>
      <h3 className="title">Đăng Nhập</h3>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<SigninData>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<SigninData>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <div className="action flex justify-space-between gap-20">
          <Button onClick={props.onCancel} disabled={isSigningIn}>
            Đóng
          </Button>

          <Button type="primary" htmlType="submit" disabled={isSigningIn} loading={isSigningIn}>
            Đăng nhập
          </Button>
        </div>
      </Form>
    </Modal>
  )
}
