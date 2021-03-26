import React from 'react'
import { useAuthContext } from 'context/AuthContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Head from 'next/head';

import Button from 'components/Button'
import Logo from 'components/Logo'
import Input from 'components/Form/Input';

const LoginContainer = () => {
    const { loginUser, isAuthLoading } = useAuthContext()

    const formik = useFormik({
        validationSchema: Yup.object().shape({
            email: Yup.string().email('Invalid email').required('Required'),
        }),
        initialValues: {
            email: ''
        },
        onSubmit: values => {
            loginUser(values.email)
        },
    });

    return (
        <div className='flex space-between flex-wrap h-screen'>
            <Head>
                <title>Login | SimpleCommerce</title>
                <meta name="description" content="Simple commercial store you can imagine"/>
            </Head>

            <div className='bg-white p-20 h-screen sm:h-auto lg:w-1/2 w-full flex flex-row items-center justify-center'>
                <div className='max-w-md'>

                    <div className='mb-9'>
                        <h2> Login </h2>
                        <p className='text-gray-400'>
                            No register required. We just need your valid email. It's simple, because we are SimpleCommerce!
                        </p>
                    </div>    

                    <form onSubmit={formik.handleSubmit}>
                        <Input 
                            label='Email'
                            type='email' 
                            name="email"
                            placeholder='john.doe@gmail.com'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />

                        <br/>

                        <Button 
                            onClick={formik.handleSubmit} 
                            isLoading={isAuthLoading}
                            stacked
                        >
                            Login
                        </Button>
                    </form>
                </div>
            </div>
            <div className='bg-gray-50 p-20 h-screen sm:h-auto lg:w-1/2 w-full flex flex-row items-center justify-center'>
                <div>
                    <div className="text-center mb-8">
                        <Logo size='text-5xl'/>
                    </div>
                    <img className="w-auto h-auto max-w-full" src="/img/login-svg.svg" alt="login"/>
                </div>
            </div>
        </div>
    )
}

export default LoginContainer
