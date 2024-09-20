import { categories } from "../data/categories"
import { v4 as uuidv4 } from 'uuid'
import { useState, ChangeEvent, isValidElement, FormEvent, Dispatch } from "react"
import { Activity } from "../types"
import { ActivityActions } from "../reducers/activity-reducer"

type FormProps = {
    dispatch: Dispatch<ActivityActions>
}
const initialState : Activity = {
    id: uuidv4(),
    category: 1,
    name: '',
    calories: 0
}
const Form = ({dispatch} : FormProps) => {

    const [activity, setActivity] = useState<Activity>(initialState)
    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        const isNumberField = ['category', 'calories'].includes(e.target.id)

        
        setActivity({...activity, [e.target.id]: isNumberField ? Number(e.target.value) : e.target.value })
    }

    const isValidActivity = () => {

        const { category, name, calories } = activity
        return name.trim() !== '' && calories > 0

    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('enviando...', activity)
        dispatch({type: 'save-activity', payload: {newActivity : activity}})

        setActivity({
            ...initialState,
            id: uuidv4()
        }
        )
    }
    return (
    <form
    className="space-y-5 bg-white shadow p-10 rounded-lg"
    onSubmit= {handleSubmit}
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
    disabled={!isValidActivity()}
    className="bg-gray-800 disabled:opacity-10 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
    value={activity.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio'}
    
    />

    </form>
    )
}

export default Form
