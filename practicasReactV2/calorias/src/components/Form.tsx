import { categories } from "../data/categories"
import { useState, ChangeEvent } from "react"
const Form = () => {

    const [activity, setActivity] = useState({
        category: 1,
        name: '',
        calories: 0
    })
    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        setActivity({...activity, [e.target.id]: e.target.value})
    }

    return (
    <form
    className="space-y-5 bg-white shadow p-10 rounded-lg"
    >
    <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">Categoría:</label>
        <select 
        name="category" id="category"
        // onChange={(e) => setActivity({...activity, category: Number(e.target.value)})}
        onChange={handleChange}
        value={activity.category}
        className="border border-slate-300 p-2 rounded-lg w-full bg-white">
        {categories.map((category) => (
            <option key={category.id} value={category.id}>
                {category.name}
            </option>
        ))}
        </select>
    </div>
    <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">Actividad:</label>
        
        <input
        type="text"
        name="name"
        onChange={handleChange}
        // onChange={(e) => setActivity({...activity, name: e.target.value})}
        value={activity.name}
        id="name"
        className="border border-slate-300 p-2 rounded-lg w-full bg-white"
        placeholder="ej. Comida, Jugo de Naranja,Ensalada, Ejercicio, Pesas Bicicleta..."
        />
    </div>
    <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">Calorias:</label>
        
        <input
        type="number"
        name="calories"
        id="calories"
        // onChange={(e) => setActivity({...activity, calories: Number(e.target.value)})}
        onChange={handleChange}
        value={activity.calories}
        className="border border-slate-300 p-2 rounded-lg w-full bg-white"
        placeholder="Calorias ej. 300, 500, 1000..."
        />
    </div>
    <input type="submit" 
    className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
    value="Guardar Comida o Guardar Ejercicio" 
    
    />

    </form>
    )
}

export default Form
