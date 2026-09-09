import { NavLink, Outlet } from "react-router";


const Sidebar = () => {
    return (
        <>
        <div className="sidebar">
            <nav className="navbar">
                <NavLink to="/admin">Users</NavLink>
                <NavLink to="pokemons">Pokemons</NavLink>
            </nav>
        </div>
        </>
    )
}

export default Sidebar;