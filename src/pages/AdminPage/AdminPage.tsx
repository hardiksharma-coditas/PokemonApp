import { Outlet } from "react-router"
import Sidebar from "../../components/Sidebar/Sidebar"

const AdminPage = () => {
    return (
        <>
        <Sidebar />
        <Outlet />
        </>
    )
}

export default AdminPage;