import Header from "./components/Header"
import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import { menuItems } from "./data/db"
import OrderTotal from "./components/OrderTotal"
import { useOrder } from "./hooks/useOrder"
import PropinaForm from "./components/PropinaForm"
// import { MenuItems } from "./types"

function App() {

  const {order,propina, setPropina,addItem,removeItem,placeOrder} = useOrder()

  return (
    <>
    <Header/>
    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
      <div className="p-5">
        <h2 className="text-4xl font-black">MENÚ</h2>
        <div className="space-y-3 mt-10">
        {menuItems.map((item) => (
          <MenuItem 
          addItem={addItem}
          key={item.id} 
          menuItems={item} />
        ))}
        </div>
  
      </div>
      <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
      {order.length > 0 ? (
        <>
          <OrderContents  
          order={order} 
          removeItem={removeItem}
          />
          <PropinaForm
          propina={propina}
          setPropina={setPropina}/>
    
          <OrderTotal 
            placeOrder={placeOrder}
            propina={propina}
            order={order} 
          />
        </>
      ) : (
        <p className='text-center text-2xl'>La orden esta vacia</p>
      ) }
    
    

    


      </div>

    </main>
   
    </>
  )
}

export default App
