import { Drawer, DrawerProps } from "antd";
import { CustomerForm } from "./CustomerForm";

export function CustomerSupport({ open, ...props }: DrawerProps) {
  return (
    <Drawer open={open} placement="right" {...props} width={500} className="cust_support">
      {open && <CustomerForm key={open ? 1 : 0} />}
      
    </Drawer>
  )
}