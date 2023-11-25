import { Card, Skeleton } from "antd";

export function CardSkeleton() {
  return (
    <Card>
      <Skeleton.Button active block style={{ height: 180 }} />
      <br />
      <br />
      <Skeleton active />
    </Card>
  )
}