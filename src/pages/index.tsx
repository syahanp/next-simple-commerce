import Button from 'components/Button'
import Logo from 'components/Logo'
import Text from 'components/Text'
import { useFormik } from 'formik';
import Cookie from 'js-cookie';
import Head from 'next/head'
import { useRouter } from 'next/router';

export default function Login() {
    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            email: '',
            fullname: ''
        },
        onSubmit: values => {
            Cookie.set('user', values)
            router.push('/products')
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
                        <Text variant='h2'> Login </Text>
                        <Text color='text-gray-400'>
                            Enter your personal information, so we can send your checkout items to your email.
                        </Text>
                    </div>    

                    <form onSubmit={formik.handleSubmit}>
                        <label className="block mb-5">
                            <div className="text-gray-700 font-medium">Fullname</div>
                            <input 
                                type='text' 
                                name="fullname"
                                value={formik.values.fullname}
                                onChange={formik.handleChange}
                                className='form-input py-4 mt-2 block w-full bg-gray-50 placeholder-gray-400 rounded-sm hover:border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-transparent' placeholder="John Doe" />
                        </label>
                        <label className="block mb-5">
                            <div className="text-gray-700 font-medium">Email</div>
                            <input 
                                type='email' 
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                className='form-input py-4 mt-2 block w-full bg-gray-50 placeholder-gray-400 rounded-sm hover:border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-transparent' placeholder="john.doe@gmail.com" />
                        </label>

                        <br/>

                        <Button onClick={formik.handleSubmit} stacked>Login</Button>
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
