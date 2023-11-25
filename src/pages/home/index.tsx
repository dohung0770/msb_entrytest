import { Layout } from "antd";
import { useRecoilState } from "recoil";
import { FileCheckIcon, FileIcon, SwapIcon } from "@/assets/icons";
import { ListProduct, Slider, LoginForm, CustomerSupport } from "@/components";
import { loginAtom, supportationAtom } from "@/store";

export default function HomePage() {
  const [isLoggingIn, setLogginIn] = useRecoilState(loginAtom)
  const [needSupportation, setNeedSupportation] = useRecoilState(supportationAtom)

  return (
    <>
      <Layout.Content>
        <Slider />

        <div className="quests">
          <h2>Vì sao nên chọn chúng tôi</h2>

          <div className="quest_item">
            <FileIcon />
            <h3>100% online</h3>
            <p>Đăng ký và nộp hồ sơ trực tuyến</p>
          </div>
          <div className="quest_item">
            <FileCheckIcon />
            <h3>Phê duyệt siêu tốc</h3>
            <p>Duyệt hồ sơ nhanh trong 5 phút</p>
          </div>
          <div className="quest_item">
            <SwapIcon />
            <h3>Sử dụng linh hoạt</h3>
            <p>Dễ dàng chuyển đổi linh hoạt giữa các sản phẩm</p>
          </div>
        </div>

        <ListProduct />
      </Layout.Content>

      <CustomerSupport
        title='Yêu cầu tư vấn'
        open={needSupportation}
        onClose={() => setNeedSupportation(false)} />

      <LoginForm
        open={isLoggingIn}
        onCancel={() => setLogginIn(false)} />
    </>
  )
}
