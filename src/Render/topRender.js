import "./popular-render.css"
import { Link } from "react-router-dom"

export const TopRender = ({ item }) => {
    return (
        <>
            <Link to={`/tv/${item.id}`} className="col-3 mt-3 card">
                <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
                <h3>{item.name}</h3>
                <p>{item.first_air_date}</p>
                <p>Reyting: {item.vote_average}</p>
            </Link>
        </>
    )
}