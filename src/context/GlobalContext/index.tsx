import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const GlobalContext = createContext(null)

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

export const GlobalProvider = ({ children }) => {
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [subItems, setSubItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const defaultValue = cartItems.map(x => {
            return {
                id: x.id,
                price: x.price,
                subTotal: x.price // as initial sub total data
            }
        })

        setSubItems(defaultValue)
    }, [cartItems])

    useEffect(() => {
        const subTotal = subItems.map(x => x.subTotal).reduce((a, b) => a+b, 0);
        setTotalPrice(subTotal)
    }, [subItems])

    const removeItem = useCallback((id) => {
        let resolvedItems = cartItems.filter(x => x.id !== id)
        setCartItems(resolvedItems)
    }, [cartItems])

    const addItem = useCallback((item) => {
        setCartItems(prev => [...prev, item])
    }, [cartItems])

    const calculatePriceItem = (itemID: number, multiplier: 'add' | 'remove') => {

        if (multiplier === 'add') {
            setSubItems(prev => prev.map(x => {
                if (x.id === itemID) {
                    return {...x, subTotal: x.subTotal + x.price}
                }
                
                return {...x}
            }))
        }

        if (multiplier === 'remove') {
            setSubItems(prev => prev.map(x => {
                if (x.id === itemID) {
                    return {...x, subTotal: x.subTotal - x.price}
                }
                
                return {...x}
            }))
        }
    }

    const contextValue = {
        cartIsOpen, 
        setCartIsOpen,
        cartItems,
        setCartItems,
        addItem,
        removeItem,
        totalPrice,
        calculatePriceItem
    }

    return (
        <GlobalContext.Provider value={contextValue}>
            { children }
        </GlobalContext.Provider>
    )
}

