import { useForm } from "react-hook-form";
import  authService  from '../Appwrite/Auth'
import { useDispatch } from "react-redux";
import {Logo,Input,Button} from '../Components/index'
//import action creators
import { login as storeLogin } from '../Features/authSlice'
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'

export default function Login() {
    //in forms create a state for errors
    const [error, setError] = useState('')
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const onSubmit = async (data) => {
        //clear error state when submit is clicked
        setError('')
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(storeLogin(userData))
                }
            }
        } catch (error) {
            setError(error.message)
        }

    }
    return (
        <div className="flex justify-center items-center w-full">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width='100%' />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">
                    sign in to your account
                </h2>
                <p className="mt-2 text-center text-bae text-black/60">
                    Dont&apos;t have any account?&nbsp;
                    <Link to='/signup' className="font-medium text-primary transition-all duration-200 hover:underline">
                        Sign up
                    </Link>
                </p>
                {error && (<p className="text-red-500 mt-8 text-center">
                    {error}
                </p>)}
                <form onSubmit={handleSubmit(onSubmit) } className="mt-8">
                    <div className="space-y-5">
                        <Input label={'Email: '} placeholder={'Enter your email'} type={'email'} {...register('email',{
                            required:true,
                            // validate:{
                            //     matchPattern:(value)=> ^[^@]+@[^@]+\.[^@]+$/.test(value) || 'email must be a valid address'
                            // }
                                    }
                                )
                            }
                        />
                        <Input label={'Password: '} type={'password'} placeholder={'Enter your password'} {...register('password',{required:true})}/>
                        <Button className="w-full" type="submit">Sign in</Button>
                    </div>
                </form>
            </div>
        </div>

    )
}
