import { Layout } from "antd";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <Layout.Footer>
      <div className="footer">
        <p>Bản quyền © 2021 thuộc về Ngân hàng TMCP Hàng Hải Việt Nam MSB</p>

        <div className="nav">
          <Link to='/'>Điều khoản dịch vụ</Link>
          <Link to='/'>Ngân hàng điện tử</Link>
        </div>
      </div>
    </Layout.Footer>
  )
}
