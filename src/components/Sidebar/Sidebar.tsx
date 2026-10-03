import { NavLink, Outlet } from "react-router";
import styles from "../Sidebar/Sidebar.module.scss"

const Sidebar = () => {
    return (
        <>
        <div className={styles.sidebar}>
            <nav className={styles.navbar}>
                <NavLink className={styles.navlink} to="/admin">Users</NavLink>
                <NavLink className={styles.navlink} to="pokemons">Pokemons</NavLink>
            </nav>
        </div>
        </>
    )
}

export default Sidebar;