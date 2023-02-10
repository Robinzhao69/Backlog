import { useSelector } from 'react-redux'
import './Display.css'

const Display = () => {
    
    // ik pak hier de state op
    const filteredGames = useSelector(state => {return state})

    let firstToBeRendered = false;

    // ik map door de gefilterde games 
    const titlesToBeRendered = filteredGames.map(game => {
        // als firstToBeRendered false is zet het naar true.
        if(firstToBeRendered === false){
            // firstToBeRendered blijft nu true en krijgt een speciale figure
            firstToBeRendered = true
            return  <section key={game} className='display'>
                    <h2>{game.title}</h2>
                    <figure className='display__play'>Play this!</figure>
                </section>
        }
        // als het false is return normale kaartjes
        return  <section key={game} className='display'>
                    <h2>{game.title}</h2>
                </section>
    })
    return (
        <>
            {titlesToBeRendered}
        </>     
    )
}

export default Display