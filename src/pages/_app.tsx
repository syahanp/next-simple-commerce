import 'tailwindcss/tailwind.css'
import 'styles/main.css';
import { GlobalProvider } from 'context/GlobalContext';
import { AuthProvider } from 'context/AuthContext';

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <GlobalProvider>
                <div className='bg-gray-50'>
                    <Component {...pageProps} />
                </div>
            </GlobalProvider>   
        </AuthProvider>
    )
}

export default MyApp
