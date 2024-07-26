
import { formatCurrency } from '../helpers'
import { OrderItem, OrderItemID } from '../types'

type OrderProps = {
  order: OrderItem[];
  removeItem: (item: OrderItemID) => void;
};

const OrderContents = ({order,removeItem} : OrderProps) => {

  return (
    <div>
      <h2 className='font-black text-4xl'>CONSUMO</h2>

      <div className='space-y-3 mt-6'>

        {
          order.map((item) => (
            <div key={item.id}
            className='flex justify-between border-t items-center border-gray-300 py-5 last-of-type:border-b'>
                <div>
              <p className='text-lg'>
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className='font-black'>
                Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
              </p>
                </div>
              <button 
              className='bg-red-600 h-8 w-8 rounded-full text-white font-black'
              onClick={() => removeItem(item.id)}
              >
                X
              </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default OrderContents
