import { useContext, useState } from "react";
import Button from "../../components/Button/Button";
import { getUsers } from "../../Services/mockdata";
import styles from "../Users/Users.module.scss"
import { useUserDispatchContext, useUsersContext } from "../../Context/Pokemons.context";
import AddUserForm from "../../components/AddUser/AddUser";

const Users = () => {

    // const users = getUsers()

    const [showAddForm, setShowAddForm] = useState(false);

    const users = useUsersContext();
    const userDispatch = useUserDispatchContext();

    const addUser = () => {
        // console.log("User Added!!!")
        setShowAddForm(true);
    }

    const deleteUser = (id:number) => {
      userDispatch?.({
        action : "DELETE_USER",
        id : id
      })
      console.log("Delete User")
    }

    return (
        <>
        <div className={styles.usersContainer}>
        <Button label="+ Add User" action={addUser}/>

        { showAddForm && <AddUserForm setShowAddForm={setShowAddForm} />}
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
                        <Button label="Delete" action={() => deleteUser(user.id)}/>
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