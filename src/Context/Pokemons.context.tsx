import { createContext, useContext, useReducer, type Dispatch, type PropsWithChildren } from "react";

export interface UserState{
    id:number,
    userName:string,
    password:string,
    pokemons:string[],
}

export type UserAction = 
 {action: "ADD_USER" , name: string, password:string} |  {action :"DELETE_USER", id:number}


const UserContext = createContext<UserState[] | null>(null);
const UserDispatchContext = createContext<Dispatch<UserAction> | null>(null);
const PokemonContext = createContext(null);

export const UserContextProvider = ({children}:PropsWithChildren) => {

    const [users, dispatch] = useReducer(usersReducer, userList);

    return (
        <UserContext value={users}>
            <UserDispatchContext value={dispatch}>
              {children}
            </UserDispatchContext>
        </UserContext>
    )

}

export const useUsersContext = () =>{
    return useContext(UserContext);
}

export const useUserDispatchContext = () =>{
    return useContext(UserDispatchContext);
}

export const usersReducer = (userState:UserState[],userAction:UserAction): UserState[] =>{

    switch (userAction.action){
     case "ADD_USER" : {
        return [...userState,
        {
            id:nextId++,
            userName:userAction.name,
            password:userAction.password,
            pokemons:[]
        }]
     }

     case "DELETE_USER" : {
        return userState.filter( item => item.id !== userAction.id)
     }
    }

    return userState;
}

let nextId = 4;

const userList : UserState[] = [
    {id: 1, userName : "hardikaz@gmail.com", password: "12345678", pokemons:["Pikachu","Meowth"]},
    {id: 2, userName : "hdk@gmail.com", password: "1234567", pokemons:["Charmander","Glomy"]},
    {id: 3, userName : "hrk@gmail.com", password: "123456", pokemons:["JigglyPuff","Rock"]},
]

const pokemonsList = [
    {id: 1, name:"Pikachu"},
    {id: 2, name:"Meowth"},
    {id: 3, name:"Charmander"},
    {id: 4, name:"Squirtle"},
    {id: 5, name:"Bulgasaur"}
]