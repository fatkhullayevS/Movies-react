import { Routes, Route, Link } from "react-router-dom";
import { Login } from "./Pages/Login";

export const Public = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    )
}