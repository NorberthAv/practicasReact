export type Guitarra = {
    id: number
    name: string
    image: string
    description: string
    price: number
  }
export type CarritoItem = Guitarra & {
  quantity:number
}; 
export type GuitarraID = Guitarra['id']

// export type GuitarraID = Pick <Guitarra, 'id'>

// export interface CarritoItem extends Guitarra  {
//       quantity:number
//     }; 

//Obtener solo Atributos Deseados PICK
// export type CarritoItem = Pick <Guitarra, 'id' | 'name' | 'image' | 'description' | 'price'> & {
//   quantity:number
// }; 
//Quitar solo Atributos no Deseados Omit
// export type CarritoItem = Omit <Guitarra, 'id' | 'name' | 'image' | 'description' | 'price'> & {
//     quantity:number
//   }; 