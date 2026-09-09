
export interface UserProps{
    email:string,
    password:string|number,
    role:'admin'|'user'
}

const users = [
    {id:1, email:"hardik@gmail.com",password:"12345678", role:"admin"},
    {id:2, email:"user1@gmail.com", password:"987654321", role:"user"},
    {id:1, email:"user1@gmail.com", password:"987654321", role:"user"}
]


export function AuthorizeUser(user:UserProps){

    let searchUser = users.find((u)=>user.email.toLowerCase() === u.email.toLowerCase())
    
    if(searchUser) {
     return searchUser.password === user.password ? searchUser : null;
    } 
    
    else{
        return null;
    }

}