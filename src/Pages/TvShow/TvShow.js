import { useEffect, useState } from "react"
import { TopRender } from "../../Render/topRender"
import { RenderPosts } from "../../RenderPosts/RenderPosts"
export const TvShow = () => {

    const [movies, setMovies] = useState({
        isLoading: true,
        isError: false,
        data: {}
    })

    const [results, setResults] = useState([])
    console.log(results);


    useEffect(() => {
        fetch('https://api.themoviedb.org/3/tv/on_the_air?api_key=4ae2bfba4d427f83c3c89c4e9a673697')
            .then(res => res.json())
            .then((data) => setResults(data.results))
            .catch((err) => setMovies({
                ...movies,
                isLoading: false,
                isError: true
            }))
    }, [])
    return (
        <>
            {movies.data && results.map((e) => (
                <TopRender key={e.id} item={e} />
            ))}

        </>
    )
}