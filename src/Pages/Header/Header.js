import { Link } from "react-router-dom"
import "./header.css"

export const Header = () => {
    return (
        <nav className="header">
            <ul>
                <li>
                    <Link to="/home">Home Page</Link>
                </li>
                <li>
                    <Link to="/popular">Popular Movies</Link>
                </li>
                <li>
                    <Link to="/top-rated">Top Rated Movies</Link>
                </li>
                <li>
                    <Link to="/upcoming">Up coming Movies</Link>
                </li>
                <li>
                    <Link to="/tv-show">Tv Show</Link>
                </li>
            </ul>
            <div>
                <input type="text" placeholder="search..." />
            </div>
        </nav>
    )
}