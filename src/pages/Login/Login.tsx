import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input"


const Login = () =>{

    return (
        <>
        <div className="loginPage">
            <form>
            <div className="input">
                <Input placeholder="Useraname" />
                <Input placeholder="password" />
                <Button label="Login"/>
            </div>
            </form>
        </div>
        </>
    )
}

export default Login;