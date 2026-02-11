import React from 'react';
import { UseTransactionController } from '../hooks/UseTransactionController';

const TransactionList = () => {
    const { data, loading, refreshData } = UseTransactionController();

    return (
        <div className="max-w-2xl mx-auto p-6 bg-gray-50 min-h-screen">
            {/* Header Card */}
            <div className="flex items-center justify-between mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Zenith Ledger</h1>
                    <p className="text-gray-500 text-sm">Real-time expense tracking</p>
                </div>
                <button
                    onClick={refreshData}
                    disabled={loading}
                    className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-md active:scale-95"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    {loading ? "Syncing..." : "Sync Ledger"}
                </button>
            </div>

            {/* Transaction Items */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {data.length > 0 ? (
                    <div className="divide-y divide-gray-100">
                        {data.map((item) => (
                            <div key={item.id} className="flex items-center justify-between p-5 hover:bg-gray-50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-lg">
                                        {item.description ? item.description[0].toUpperCase() : 'Z'}
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">{item.description}</p>
                                        <p className="text-xs text-gray-400 font-mono">ID: #{item.id}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-black text-gray-800">
                                        ₦{Number(item.amount || 0).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="p-20 text-center">
                        <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                        </div>
                        <p className="text-gray-500 font-medium">No transactions found.</p>
                        <p className="text-gray-400 text-sm">Hit the sync button to fetch data.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TransactionList;