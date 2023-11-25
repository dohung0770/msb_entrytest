import { Button, Carousel } from "antd";

export function Slider() {
  return (
    <div className="slider">
      <Carousel>
        <div className="banner">
          <div className="info">
            <div className="content">
              <h1>Trải nghiệm sống cực chất cho dân văn phòng</h1>
              <p>Lương từ 8 triệu/tháng, nhận ngay tới
                200 triệu VND</p>

              <Button type="primary" size="large">Khám phá ngay</Button>
            </div>
          </div>
        </div>

        <div className="banner">
          <div className="info">
            <div className="content">
              <h1>Trải nghiệm sống cực chất cho dân văn phòng</h1>
              <p>Lương từ 8 triệu/tháng, nhận ngay tới
                200 triệu VND</p>

              <Button type="primary" size="large">Khám phá ngay</Button>
            </div>
          </div>
        </div>
      </Carousel>

      <div className="extended"></div>
    </div>
  )
}