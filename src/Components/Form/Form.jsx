import { useState } from "react"
import { useDispatch} from "react-redux"
import { filterGamesByTitle, filterGamesByPlatform, filterGamesByType}from "../../helpers/filterGames"
import { games } from "../../data/games"
import "./Form.css"

const Form = () => {

    const [inputs, setInputs] = useState([
        {
            id: "title",
            value: "",
            label: "TITLE",
            filter: filterGamesByTitle
        },
        {
            id: "platform",
            value: "",
            label: "PLATFORM",
            filter: filterGamesByPlatform
        },
        {
            id: "type",
            value: "",
            label: "TYPE",
            filter: filterGamesByType
        }
        
    ])

    let dispatch = useDispatch()

    const onInputChanged = (event) => {
        // er wordt een kopie gemaakt van de inputs state
        let copy = [...inputs]

        // ik map door de inputs heen en per input wordt er gekeken naar de id van inputs en of het dan overeenkomt met de id waar ik zit te typen.
        copy.map(input => {
            // als dat klopt veranderd de value van de input naar wat ik getypt heb 
            if (input.id === event.target.id) {
                input.value = event.target.value
            }
        })
        setInputs(copy)
    }

    const inputsToBeRendered = inputs.map(objectFromStateArray => {
        return (
            <div key={objectFromStateArray.id} className="form__wrapper">
                <label className="form__label" htmlFor={objectFromStateArray.id}>{objectFromStateArray.label}</label>
                <input className="form__input" onChange={onInputChanged} id={objectFromStateArray.id} type="text" value={objectFromStateArray.value} />
            </div>
        )
    })

    const submit = (event) => {
        event.preventDefault();
        // result zijn alle games uit het data bestand
        let result = games
        // loop door elke input heen
        inputs.forEach( input => {
            // result wordt de uitkomst van de filter functie en gaat vervolgens door op de volgende input
            result = input.filter(input.value, result)
        })

        // ik verstuur het resultaat naar de state toe
        dispatch({
            type: "FILTEREDGAMES",
            payload: result
        })
    }
    return (
        <>
            <form className="form" onSubmit={submit}>
                <div className="form__inputsWrapper">
                    {inputsToBeRendered}
                </div>
                <button className="form__search" onClick={submit}>zoeken</button>
            </form>
        </>
    )
}

export default Form