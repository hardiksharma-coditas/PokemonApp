import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input"
import { AuthorizeUser, type UserProps } from "../../Services/loginService";
import { useNavigate } from "react-router";


const Login = () =>{
 
    const { register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate()
    const onSubmit = (data:any) => {
        const getUser:UserProps|null = AuthorizeUser(data);

        if(getUser){
            console.log(getUser,"getUser")
           getUser.role === 'admin' ? navigate('/admin') : navigate('/user')
        }
    }

    return (
        <>
        <div className="loginPage">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input">
                <Input 
                type="email"
                placeholder="Useraname" 
                {...register("email")}
                />
                <Input 
                type="password"
                placeholder="password"
                {...register("password")} 
                />                
                <Button type="submit" label="Login"/>
            </div>
            </form>
        </div>
        </>
    )
}

export default Login;