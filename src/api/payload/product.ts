import { nanoid } from 'nanoid'
import { Product } from '@/types'

export default [
  {
    id: nanoid(),
    name: 'Thẻ tín dụng',
    description: 'Đa dạng lựu chọn phong cách chi tiêu',
    imageUrl: '/img/Frame626244.png',
    subProducts: [
      {
        id: nanoid(),
        name: "MSB Mastercard mDigi",
      },
      {
        id: nanoid(),
        name: "MSB Mastercard Super Free",
      },
      {
        id: nanoid(),
        name: "MSB Visa Online",
      },
      {
        id: nanoid(),
        name: "MSB Visa Travel",
      },
      {
        id: nanoid(),
        name: "MSB Visa Signature",
      }
    ]
  },
  {
    id: nanoid(),
    name: 'Vay',
    description: 'Giải ngân tức thì, tiêu dùng linh hoạt',
    imageUrl: '/img/Frame626245.png',
    subProducts: [
      {
        id: nanoid(),
        name: 'Vay mua ô tô',
        subProducts: [
          {
            id: nanoid(),
            name: 'Vay mua ô tô mới',
          },
          {
            id: nanoid(),
            name: 'Vay mua ô tô cũ',
          }
        ]
      },
      {
        id: nanoid(),
        name: 'Vay mua nhà, xây sửa nhà',
        subProducts: [
          {
            id: nanoid(),
            name: 'Vay mua nhà thổ cư',
          },
          {
            id: nanoid(),
            name: 'Vay mua nhà dự án',
          },
          {
            id: nanoid(),
            name: 'Vay xây - sửa nhà',
          }
        ]
      }
    ]
  },
  {
    id: nanoid(),
    name: 'Mua trước trả sau',
    description: 'Chuyển đổi trả góp, nhẹ ví tri tiêu',
    imageUrl: '/img/Frame626246.png'
  },
  {
    id: nanoid(),
    name: 'Tiền nhanh',
    description: 'Nhận khoản vay dự phòng, chủ động và nhanh chóng',
    imageUrl: '/img/Frame626247.png'
  },
  {
    id: nanoid(),
    name: 'Tài khoản thanh toán M-Pro',
    description: 'Siêu miễn phí, hoàn tiền tới 3,6 triệu đồng',
    imageUrl: '/img/Frame626248.png'
  },
  {
    id: nanoid(),
    name: 'Bảo hiểm',
    description: 'Mua bảo hiểm trực tuyến dễ dàng chỉ với vài thao tác',
    imageUrl: '/img/Frame626249.png'
  }
] as Product[]