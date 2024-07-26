
const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type PropinaFormProps = {
    propina: number
    setPropina: (propina: number) => void
}

const PropinaForm = ({propina,setPropina}: PropinaFormProps) => {
return (

    <div>
        <h3 className="font-black text-2xl">Propina:</h3>

        <form>
            {tipOptions.map((option) => (
                <div key={option.id}>
                    <input type="radio" 
                    id={option.id}  
                    name="propina" 
                    value={option.value}
                    onChange={(e) => setPropina(Number(e.target.value))}
                    checked={propina === option.value}
                    
                    /> {''}
                    <label htmlFor={option.id}>{option.label}</label>
                </div>
            ))}
    

        </form>

    </div>

)
}

export default PropinaForm
