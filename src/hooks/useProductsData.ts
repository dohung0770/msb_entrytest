import { useEffect, useState } from "react";
import { Product } from '@/types'
import { fakeClient } from '@/api'

export function useProductsData() {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    let ignored = false
    setIsLoading(true)

    fakeClient.getAllProduct()
      .then(data => {
        if (!ignored) {
          setProducts(data as Product[])
        }
      })
      .finally(() => setIsLoading(false))

    return () => {
      ignored = true
    }
  }, [])

  return { products, setProducts, isLoading }
}