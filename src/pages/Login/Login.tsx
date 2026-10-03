import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input"
import { AuthorizeUser, type UserProps } from "../../Services/loginService";
import { useNavigate } from "react-router";
import styles from '../Login/Login.module.scss'
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
    email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email"),

    password: z
    .string()
    .min(4,"Password must have atleast 4 characters")
})

type LoginFormData = z.infer<typeof loginSchema>


const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema)
    });
    const navigate = useNavigate()
    const onSubmit = (data: any) => {
    const getUser: UserProps | null = AuthorizeUser(data);

        if (getUser) {
            getUser.role === 'admin' ? navigate('/admin') : navigate('/user')
        }     
    }

    return (
        <>
            <div className={styles.loginPage}>
                <div className={styles.imageSection}>
                </div>
                <div className={styles.formContainer}>
                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
                        <h3 className={styles.formHeading}>Welcome to Pokemon App !</h3>
                        <Input
                            type="email"
                            placeholder="Useraname"
                            {...register("email")}
                        />
                        <div className={styles.errorBox}>
                        { errors.email && <p>{errors.email.message}</p>}
                        </div>
                        <Input
                            type="password"
                            placeholder="password"
                            {...register("password")}
                        />
                        <div className={styles.errorBox}>
                         { errors.email && <p>{errors.password.message}</p>}
                         </div>
                        <Button type="submit" label="Login"/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;