import Header from "./components/Header"
import MenuItem from "./components/MenuItem"
import { menuItems } from "./data/db"
import { useOrder } from "./hooks/useOrder"
// import { MenuItems } from "./types"

function App() {

  const {addItem} = useOrder()

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
      <div>
        <h2>CONSUMO</h2>

      </div>

    </main>
   
    </>
  )
}

export default App
