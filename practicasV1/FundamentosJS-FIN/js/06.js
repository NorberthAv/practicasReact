// Objetos - Destructuring con 2 o más objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'Juan',
    premium : true,
    direccion: {
        calle: 'Av. 1',
        pais: 'MX',
    }
}

const { nombre, precio, disponible } = producto
const { nombre: nombreCliente, premium, direccion: {calle, pais} } = cliente

console.log(nombre)
console.log(nombreCliente)