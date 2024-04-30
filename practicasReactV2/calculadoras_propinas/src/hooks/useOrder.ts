
import { useState } from "react"
import { OrderItem } from "../types"
export const useOrder = () => {

    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item: OrderItem) => {
        setOrder([...order, item])
    }

  return {

  }
}
