import { useState, useEffect } from "react"

import Guitar from "./components/Guitar"
import Header from "./components/Header"
import {db} from "./data/db"
function App() {

  const [data, setData] = useState([])
  const inicialCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const [carrito, setCarrito] = useState(inicialCarrito)
  const MAX_ITEM = 10

  useEffect(() => {
    setData(db)
  }, [])
  useEffect(() => {
    saveToLocalStorage()
  }, [carrito])

  function saveToLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }

  function removeFromCart (id){

    setCarrito(prevCarrito => prevCarrito.filter(item => item.id !== id))
    // const updatedCarrito = carrito.filter(item => item.id !== id)
    // setCarrito(updatedCarrito)
  }

  function addToCart(item) {
    let cartItem = [];
    const itemExist = carrito.findIndex(guitarra => guitarra.id === item.id)
    if(itemExist >= 0) {
      
      cartItem = [...carrito]
      cartItem[itemExist].quantity++
      setCarrito(cartItem)

      console.log("El elemento ya existe en el carrito")
    }else{
      item.quantity = 1
       cartItem = [...carrito, item]
      setCarrito(cartItem)
      
    }
    // localStorage.setItem('carrito', JSON.stringify(cartItem))

  }
  function decrementQuantity(id){
    const updatedCarrito = carrito.map(item => {
  
      if(item.id === id && item.quantity > 1){
        item.quantity--
      }
      return item
    })
    setCarrito(updatedCarrito)
    
  }
  function emptyCart(){
    setCarrito([])
  }
  function incrementQuantity(id){

    const updatedCarrito = carrito.map(item => {
      if(item.id === id && item.quantity < MAX_ITEM){
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      // if(item.id === id){
      //   item.quantity++
      // }
      return item
    })
    setCarrito(updatedCarrito)
  }

  return (
    <>
    <Header 
    removeFromCart={removeFromCart}
    incrementQuantity={incrementQuantity}
    decrementQuantity={decrementQuantity}
    emptyCart={emptyCart}
    carrito={carrito}
    />

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
        { data.map( guitarra => (
          <Guitar 
          key={guitarra.id} 
          guitarra={guitarra} 
          addToCart={addToCart}
    
          />
        ))

        } 
      
        
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>

    </>
  )
}

export default App
