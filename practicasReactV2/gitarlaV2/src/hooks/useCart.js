import { useState, useEffect, useMemo } from "react"
import {db} from "../data/db"

const useCart = () => {

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
    //State Derivado
const isEmpty = useMemo(() => carrito.length === 0,[carrito]);
const CarTotal = useMemo(() => carrito.reduce((total, item) => total + item.quantity * item.price, 0));


    return{
        data,
        carrito,
        addToCart,
        removeFromCart,
        decrementQuantity,
        incrementQuantity,
        emptyCart,
        isEmpty,
        CarTotal
    }
  
}

export {
    useCart
}