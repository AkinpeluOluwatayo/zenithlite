export const fetchTransactions = async () => {
    try {
        const response = await fetch('https://zenith-6tap.onrender.com/transactions');
        if (!response.ok) throw new Error('Failed to fetch data');
        return await response.json();
    } catch (error) {
        console.error("Model Error:", error);
        return [];
    }
};