import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Magic } from 'magic-sdk';

const AuthContext = createContext(null)

let magic

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [isAuthLoading, setAuthLoading] = useState(false);
    const router = useRouter()

    useEffect(() => {
        magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY)

        checkUserIsLoggedIn()
    }, [])

    const checkUserIsLoggedIn = async () => {
        try {
            const isLoggedIn = await magic.user.isLoggedIn();

            if (isLoggedIn) {
                const { email } = await magic.user.getMetadata()
                setUser(email)
                
                const token = await getToken()
                console.log('user token :', token);
            }
        }
        catch (err) {

        }
    }

    const getToken = async () => {
        try {
            const token = await magic.user.getIdToken();
            return token
        } 
        catch (err) {

        }
    }

    const loginUser = async (email) => {
        setAuthLoading(true)

        try {
            await magic.auth.loginWithMagicLink({ email })
            setUser(email)
            router.push('/products')
            setAuthLoading(false)

            // test
            const token = await getToken()
            console.log('user token :', token);
        } 
        catch (err) {
            setUser(null);
            setAuthLoading(false)
        }
    }

    const logoutUser = async () => {
        try {
            await magic.user.logout()
            setUser(null)
            router.push('/')
        }
        catch (err) {
            console.log(err);
        }
    }

    const contextValue = { user, loginUser, logoutUser, isAuthLoading }

    return (
        <AuthContext.Provider value={contextValue}>
            { children }
        </AuthContext.Provider>
    )
}

