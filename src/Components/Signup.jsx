import { useState } from "react";
import { useDispatch } from "react-redux";
import  authService  from '../Appwrite/Auth'
import { login as storeLogin } from '../Features/authSlice'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom'
import {Logo,Input,Button} from './index'
function Signup() {
    const [error, setError] = useState('')
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    //handle submit function
    const onSubmit = async (data) => {
        //always clear error state
        setError('')
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(storeLogin(userData))
                    navigate('/')
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
                    sign up to create an account
                </h2>
                <p className="mt-2 text-center text-bae text-black/60">
                    Already have an account?&nbsp;
                    <Link to='/login' className="font-medium text-primary transition-all duration-200 hover:underline">
                        Sign in
                    </Link>
                </p>
                {error && (<p className="text-red-500 mt-8 text-center">
                    {error}
                </p>)}
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                    <div className="space-y-5">
                        <Input label={'Full Name: '} placeholder={'Enter your full name'} type={'text'} {...register('name', {required:true})}/> 
                        <Input label={'Email: '} placeholder={'Enter your email'} type={'email'} {...register('email', {required:true})}/>
                        <Input label={'Password: '} type={'password'} placeholder={'Enter your password'} {...register('password', { required: true })} />
                        <Button className="w-full" type="submit">Sign in</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Signup;