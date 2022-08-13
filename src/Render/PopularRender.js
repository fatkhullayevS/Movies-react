import { Link } from "react-router-dom"
import "./popular-render.css"

export const PopularRender = ({ item }) => {
    return (
        <>
            <Link to={`/movies/${item.id}`} className="col-3 mt-3 card">
                <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
                <h3>{item.title}</h3>
                <p>{item.release_date}</p>
                <p>Reyting: {item.vote_average}</p>
            </Link>
        </>
    )
}