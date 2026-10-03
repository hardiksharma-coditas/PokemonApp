import { Outlet } from "react-router"
import Sidebar from "../../components/Sidebar/Sidebar"
import styles from "../AdminPage/AdminPage.module.scss"

const AdminPage = () => {
    return (
        <>
        <div className={styles.adminPageContainer}>
        <div className="sidebar">
        <Sidebar />
        </div>
        <Outlet />
        </div>
        </>
    )
}

export default AdminPage;