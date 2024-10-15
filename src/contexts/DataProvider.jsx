import {createContext, useContext, useEffect, useMemo, useState} from "react";
import {BALANCE_URL} from "../constants/apiEndpoints.js";


const DataContext = createContext();

export const currencyMap = {
    "CAD": {
        "name": "Canadian Dollar",
        "symbol": "$"
    },
    "USD": {
        "name": "United States Dollar",
        "symbol": "$"
    },
    "EUR": {
        "name": "Euro",
        "symbol": "€"
    },
    "GBP": {
        "name": "British Pound Sterling",
        "symbol": "£"
    },
    "JPY": {
        "name": "Japanese Yen",
        "symbol": "¥"
    },
    "AUD": {
        "name": "Australian Dollar",
        "symbol": "$"
    },
    "CHF": {
        "name": "Swiss Franc",
        "symbol": "CHF"
    },
    "CNY": {
        "name": "Chinese Yuan",
        "symbol": "¥"
    },
    "INR": {
        "name": "Indian Rupee",
        "symbol": "₹"
    },
    "MXN": {
        "name": "Mexican Peso",
        "symbol": "$"
    }
}

export const DataProvider = ({children}) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const balances = await getBalances();
                if (!balances.success) {
                    setErrorMessage(balances.error);
                    return
                }
                setData(balances.data);
            } catch (error) {
                setErrorMessage('Error fetching data: ' + error.messages);
            }
        }
        fetchData();

    }, []);
    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const getBalances = async () => {
        try {
            const response = await fetch(BALANCE_URL)
            if (!response.ok) {
                const errorMessage = await response.text();
                return {
                    success: false,
                    error: errorMessage
                }
            }
            const data = await response.json();
            return {
                success: true,
                data: data
            }
        } catch (error) {
            return {
                success: false,
                error: error.message
            }
        }

    }

    const total = {
        "Banking": useMemo(() => data.reduce((acc, curr) => {
            return curr.type === "Balance" ? acc + parseFloat(curr.balance) : acc;
        }, 0), [data]),
        "Credit Cards": useMemo(() => data.reduce((acc, curr) => {
            return curr.type === "Credit" ? acc + parseFloat(curr.balance) : acc;
        }, 0), [data]),
        "Investments": useMemo(() => data.reduce((acc, curr) => {
            return curr.type === "Investment" ? acc + parseFloat(curr.balance) : acc;
        }, 0), [data])
    };

    return (
        <DataContext.Provider value={{data, total, errorMessage}}>
            {children}
        </DataContext.Provider>
    );
}

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context;
}
