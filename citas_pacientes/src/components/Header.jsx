function Header(props){
console.log(props.numeros)
    return (
        <>
    <h1 className="font-black text-5xl text-center md:w-1/2 mx-auto">
        Seguimiento Pacientes{" "} 
        <span className="text-indigo-600">Vaterinaria</span>
    </h1>
    <p>by Norberth Avilan</p>
        </>
    )
}
export default Header

