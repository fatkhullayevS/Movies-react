import { Routes, Route } from "react-router-dom";
import { Users } from "./Pages/users";


export const Private = () => {
    return (
        <Routes>
            <Route path="/" element={<> home in private </>} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<>Bratan adashdiz 404 not found</>} />
        </Routes>
    )
}