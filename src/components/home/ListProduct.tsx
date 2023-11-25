import { Card } from "antd";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from '@ant-design/icons'

import { CardListSkeleton } from "../skeleton";
import { useProductsData } from "@/hooks";

export function ListProduct() {
  const { isLoading, products } = useProductsData()

  return (
    <div className="products">
      <h2>Danh sách sản phẩm</h2>

      <div className="card_list">
        {products.map(product => (
          <Card
            key={product.id}
            hoverable
            cover={<img alt="product image" src={product.imageUrl} />}
          >
            <Card.Meta title={product.name} description={product.description} />

            <Link to=''>Khám phá ngay <ArrowRightOutlined /> </Link>
          </Card>
        ))}

        {isLoading && <CardListSkeleton />}
      </div>
    </div>
  )
}