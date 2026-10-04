import Input from "../Input/Input"
import Button from "../Button/Button" 
import { useUserDispatchContext } from "../../Context/Pokemons.context"
import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import type { AddUserFormProps } from "./AddUser.type"

const userFormSchema = z.object({
    username : z
    .string()
    .min(3, "Username must be atleast 3 characters"),

    password : z
    .string()
    .min(6, "Password cannot be more than 6 characters")
})

type UserFormType = z.infer<typeof userFormSchema>;

const AddUserForm = ({setShowAddForm}: AddUserFormProps) => {

    const userActions = useUserDispatchContext()

    const {register , handleSubmit, formState:{errors}} = useForm<UserFormType>({
        resolver : zodResolver(userFormSchema)
    })

    const onSubmit = (data : UserFormType) => {

        console.log(data, "Form Submitted")
        userActions?.({
            action:"ADD_USER",
            name:data.username,
            password:data.password
        })
        setShowAddForm(false)
    }



    return (
        <div className="AddUserFormContainer">
            <h3>Add User</h3>
 
            <form action="" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">User Name :</label>
            <Input type="text" placeholder="John Doe" {...register("username")} />
            {errors.username && errors.username.message}

            <label htmlFor="">Password :</label>
            <Input type="password" {...register("password")}/>
            {errors.password && errors.password.message}



            <Button type="submit" label="+ Add" />
            </form>
        </div>
    )
}

export default AddUserForm;