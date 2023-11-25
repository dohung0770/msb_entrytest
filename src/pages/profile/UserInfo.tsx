import { authAtom } from "@/store";
import { List } from "antd";
import { useRecoilValue } from "recoil";

export default function UserInfo() {
  const { user } = useRecoilValue(authAtom)

  const fullName = user?.firstName + ' ' + user?.lastName

  return (
    <List
      className="content"
      header={<div>Thông tin chung</div>}>
      <List.Item>
        <span>Họ và tên</span>
        <span>{fullName}</span>
      </List.Item>

      <List.Item>
        <span>Số CMND/CCCD</span>
        <span>{user?.citizenId}</span>
      </List.Item>

      <List.Item>
        <span>Số điện thoại</span>
        <span>{user?.phoneNumber}</span>
      </List.Item>
    </List>
  )
}