import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"


type OrderTotalProps = {
    order: OrderItem[],
    propina: number,
    placeOrder: () => void


}
function OrderTotal({order,propina,placeOrder}: OrderTotalProps) {

  const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order])

const propinaAmount = useMemo(() => subtotalAmount * propina, [subtotalAmount, propina])
const totalAmount =  useMemo(() => subtotalAmount + propinaAmount, [subtotalAmount, propinaAmount])


//--------------------------------Forma con useCallback-----------------------------------
    

    // const subtotalAmount = useCallback(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), 
    // [order])

    // const propinaAmount = useCallback(() => subtotalAmount() * propina, [subtotalAmount, propina])
    // const totalAmount =  useCallback(() => subtotalAmount() + propinaAmount(), [subtotalAmount, propinaAmount])

       /* <span className="font-bold">{formatCurrency(subtotalAmount())}</span>Forma con useCallback( */
//--------------------------------Forma con useCallback-----------------------------------

    return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y Propina:</h2>
            <p>Subtotal a pagar: {''}
         
                <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
            </p>
            <p>Propina: {''}
                <span className="font-bold">{formatCurrency(propinaAmount)}</span>
            </p>
            <p>Total a Pagar: {''}
                <span className="font-bold">{formatCurrency(totalAmount)}</span>
            </p>

        </div>
        <button className="w-full bg-black uppercase text-white p-3 mt-10 font-bold disabled:opacity-10" 
        disabled={totalAmount === 0} onClick={placeOrder}>
            Guardar Orden
        </button>
    </>
    )
}

export default OrderTotal
