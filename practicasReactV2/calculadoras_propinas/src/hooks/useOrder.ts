
import { useState } from "react"
import { MenuItems, OrderItem, OrderItemID } from "../types"
export const useOrder = () => {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [propina, setPropina] = useState(0)

    const addItem = (item: MenuItems) => {
 
      const itemExist = order.find(orderItem => orderItem.id === item.id)

      if(itemExist){
        const updatedOrder = order.map(orderItem => orderItem.id === item.id ?
            {...orderItem, quantity: orderItem.quantity + 1}: orderItem)
          setOrder(updatedOrder)

      }else{
        const newItem = { ...item, quantity:1}
          setOrder([...order, newItem])
      }
    
    }
    const removeItem = (id: OrderItemID) => {

      const itemExist = order.find(orderItem => orderItem.id === id)

      if(itemExist){
        if(itemExist.quantity < 2){
          setOrder(order.filter(orderItem => orderItem.id !== id))

        }else{
          const updatedOrder = order.map(orderItem => orderItem.id === id ?
            {...orderItem, quantity: orderItem.quantity - 1} : orderItem)
            setOrder(updatedOrder)
        }

      }

    }
    const placeOrder = () => {

      setOrder([])
      setPropina(0)
    }


  return {
    order,
    propina,
    setPropina,
    addItem,
    removeItem,
    placeOrder
  }
}
