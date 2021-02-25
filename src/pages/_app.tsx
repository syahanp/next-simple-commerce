import 'tailwindcss/tailwind.css'
import { GlobalProvider } from 'context/GlobalContext';
import Cart from 'components/Cart';

function MyApp({ Component, pageProps }) {
    return (
        <GlobalProvider>
            <Cart />
            <Component {...pageProps} />
        </GlobalProvider>   
    )
}

export default MyApp
