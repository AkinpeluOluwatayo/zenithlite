import { useState, useEffect } from 'react';
import { fetchTransactions } from '../models/TransactionModel';

export const UseTransactionController = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const refreshData = async () => {
        setLoading(true);
        try {
            const result = await fetchTransactions();
            setData(Array.isArray(result) ? result : []);
        } catch (err) {
            console.error("Controller Error:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        refreshData();
    }, []);

    return { data, loading, refreshData };
};