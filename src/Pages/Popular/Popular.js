import { useState } from "react"
import { useEffect } from "react"
import { Render } from "../../Render/Render"
import Loading from "../../assets/Loading/loading.gif"

export const Popular = () => {

    const [movies, setMovies] = useState({
        isLoading: true,
        isError: false,
        data: {}
    })

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=4ae2bfba4d427f83c3c89c4e9a673697')
            .then(res => res.json())
            .then((data) => setMovies({
                ...movies,
                isLoading: false,
                data: data
            }))
            .catch((err) => setMovies({
                ...movies,
                isLoading: false,
                isError: true
            }))
    }, [movies, setMovies])
    return (
        <>
            {movies.isLoading && <img src={Loading} alt="" />}
            {movies.data && (<h1>{movies.data?.title}</h1>)}
        </>
    )
}