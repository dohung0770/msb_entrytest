import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function AppLayout() {
  return (
    <Layout className="layout">
      <Layout.Content>
        <Header />

        <Outlet />

        <Footer />
      </Layout.Content>
    </Layout>
  )
}
