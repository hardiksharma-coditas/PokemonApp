import { Route, Routes } from "react-router"
import Login from "../pages/Login/Login"
import AdminPage from "../pages/AdminPage/AdminPage"
import Users from "../pages/Users/Users"
import Pokemons from "../pages/Pokemons/pokemons"
import User from "../pages/User/User"




const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/admin" element={<AdminPage />}>
                <Route index element={<Users />} />
                <Route path="pokemons" element={<Pokemons />} />
            </Route >

            <Route path='/user' element={<User />} />
        </Routes>
    )
}

export default AppRoutes;