import { useContext } from "react";
import Button from "../../components/Button/Button";
import { getUsers } from "../../Services/mockdata";
import styles from "../Users/Users.module.scss"
import { useUsersContext } from "../../Context/Pokemons.context";

const Users = () => {

    // const users = getUsers()

    const users = useUsersContext();

    return (
        <>
        <div className={styles.usersContainer}>
        <Button label="+ Add User"/>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Caught</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
             {users && users.map(
                (user)=>{
                    return <tr key={user.id}>
                       <td>{user.userName}</td>
                       <td>{user.pokemons.length}</td>
                       <td>
                        <Button  label="Edit"/>
                        <Button label="Delete"/>
                       </td>
                     </tr>
                }
            )}
            </tbody>
        </table>
        </div>
        </>
    )
}

export default Users;