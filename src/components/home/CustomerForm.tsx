import { Button, Checkbox, Form, Input, Radio, Row, Select, Spin } from "antd";
import listCities from '@/data/vietnamCities.json'
import { useProductsData } from "@/hooks";

export function CustomerForm() {
  const { isLoading, products } = useProductsData()
  const [form] = Form.useForm()

  const selectedCity = Form.useWatch('city', form)

  const city = listCities.find(city => city.city === selectedCity)
  let listWards: string[] = []

  if (city) {
    const selectedWard = form.getFieldValue('ward')
    if (selectedWard && city.province !== selectedWard) {
      form.setFieldValue('ward', city.province)
    }

    listWards = [city.province] // @TODO:
  }

  if (isLoading) return <Spin spinning style={{ margin: 'auto'}} />

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 16 }}
      initialValues={{ remember: true }}
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item
        name="username"
        rules={[
          { required: true, message: 'Vui lòng nhập họ tên.' },
          { max: 100, message: 'Tối đa 100 ký tự.' },
          { pattern: /^[a-zA-Z']+(\s[a-zA-Z']+)+$/, message: 'Vui lòng nhập họ và tên đầy đủ, có dấu cách ở giữa và chỉ chứa dấu nháy đơn.' }
        ]}
      >
        <Input placeholder="Nhập họ và tên" />
      </Form.Item>

      <Form.Item
        name="password"
      >
        <Input placeholder="Nhập số điện thoại" />
      </Form.Item>

      <Row>
        <Form.Item
          name="city"
          rules={[{ required: true, message: 'Vui lòng chọn thành phố' }]}
        >
          <Select
            placeholder="Chọn thành phố"
            options={listCities.map(({ city }) => ({
              label: city,
              value: city
            }))} />
        </Form.Item>

        <Form.Item
          name="ward"
        >
          <Select
            placeholder="Chọn Quận/Huyện"
            options={listWards.map(ward => ({
              label: ward,
              value: ward
            }))} />
        </Form.Item>
      </Row>

      <Form.Item name='gender' label='Giới tính' className="flex-col">
        <Radio.Group >
          <Radio value='male'>Nam</Radio>
          <Radio value='female'>Nữ</Radio>
        </Radio.Group>
      </Form.Item>

      <Row className="flex-col">
        <h3>Sản phẩm cần tư vấn</h3>
        <div className="supportation_prods">
          {products.map(product => (
            <Checkbox key={product.id}>{product.name}</Checkbox>
          ))}
        </div>
      </Row>

      <Form.Item
        name="content"
        label='Chúng tôi có thể hỗ trợ gì cho bạn?'
      >
        <Input.TextArea placeholder="Nhập thông tin" rows={6} />
      </Form.Item>

      <Row className="action">
        <Button type="primary" htmlType="submit">Xác nhận</Button>
      </Row>
    </Form>
  )
}