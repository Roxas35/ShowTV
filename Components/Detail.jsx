import React from "react"
import { useParams } from "react-router-dom"

export const Detail = () => {

    const [act, setAct] = React.useState({})
    const { id } = useParams()


    React.useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`)
        .then(res => res.json())
        .then(data => setAct(data))
        .catch(err => console.log(err))
    }, [])


    return(
        <>
        {
        act._embedded?.cast.map((a) =>
            <><p>{a.person?.name}</p>
            <img src={a.person.image?.medium}></img>
            </>
        )
    }
        </>
    )
}