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

const dummyData = [
    {
        "accountName": "Aeroplane Visa Infinite",
        "accountID": "5023 5678 8746 8723",
        "balance": "400",
        "currency": "CAD",
        "type": "Credit"
    },
    {
        "accountName": "Everyday Chequing",
        "accountID": "1002 3345 1234 5678",
        "balance": "2500",
        "currency": "CAD",
        "type": "Balance"
    },
    {
        "accountName": "Savings Advantage",
        "accountID": "2001 4456 7890 1234",
        "balance": "7800",
        "currency": "CAD",
        "type": "Balance"
    },
    {
        "accountName": "Altitude Platinum Mastercard",
        "accountID": "6398 2234 1111 9999",
        "balance": "850",
        "currency": "CAD",
        "type": "Credit"
    },
    {
        "accountName": "TFSA Growth Account",
        "accountID": "3003 5678 4444 2222",
        "balance": "15500",
        "currency": "CAD",
        "type": "Investment"
    },
    {
        "accountName": "Retirement Savings",
        "accountID": "4004 1234 5555 6666",
        "balance": "34000",
        "currency": "CAD",
        "type": "Investment"
    },
    {
        "accountName": "Cashback Visa Infinite",
        "accountID": "6011 2938 7744 8888",
        "balance": "3000",
        "currency": "CAD",
        "type": "Credit"
    },
    {
        "accountName": "HFSA Health Account",
        "accountID": "5005 9876 3333 4444",
        "balance": "1200",
        "currency": "CAD",
        "type": "Investment"
    },
    {
        "accountName": "Chequing Gold",
        "accountID": "6006 7654 9999 1234",
        "balance": "6200",
        "currency": "CAD",
        "type": "Balance"
    },
    {
        "accountName": "High-Interest Savings",
        "accountID": "7007 2222 7777 8888",
        "balance": "9800",
        "currency": "CAD",
        "type": "Balance"
    }
]

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
