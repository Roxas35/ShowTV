import React from "react"
import { Film } from "./Film"
import { Search } from "./Search"


export const Home = () => {

    const [input, setInput] = React.useState('')
    const [load, setLoad] = React.useState(false)
    const [film, setFilm] = React.useState([])


    return(
        <>
        <h1>Accueil</h1>
        <Search input={input} setInput={setInput} setFilm={setFilm}/>
        {
            load ?
                <h2>Not Found</h2>
                :
                film.map((f, i) => <Film key={i} data={f} />)
        }
        </>
    )
}