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
                setData(balances);
            } catch (error) {
                console.error('Error fetching balances:', error);
            }
        };

        fetchData();

    }, []);
    const [data, setData] = useState([]);

    const getBalances = async () => {
        const response = await fetch(BALANCE_URL)
        return response.json();
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
        <DataContext.Provider value={{data, total}}>
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
