import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// import { TopRender } from "../../Render/topRender"
export const RenderPosts = () => {

    const [movies, setMovies] = useState({})

    const { id } = useParams()

    const [results, setResults] = useState([])
    console.log(results);


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4ae2bfba4d427f83c3c89c4e9a673697`)
            .then(res => res.json())
            .then((data) => console.log(data.belongs_to_collection.name))
            .catch((err) => setMovies({
                ...movies,
                isLoading: false,
                isError: true
            }))
    }, [])
    return (
        <>
            {movies.data > 0 && (
                <div>
                    <h1 className="text-white">{movies.data.name}</h1>
                    <h1>djbnejn</h1>
                </div>
            )
            }

        </>
    )
}