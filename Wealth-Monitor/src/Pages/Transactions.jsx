import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Transactions = () => {
  const transactions = [
    {
      id: 1,
      date: '2025-07-18',
      category: 'Salary',
      amount: 30000,
      type: 'Income',
    },
    {
      id: 2,
      date: '2025-07-15',
      category: 'Groceries',
      amount: 2500,
      type: 'Expense',
    },
    {
      id: 3,
      date: '2025-07-12',
      category: 'Rent',
      amount: 12000,
      type: 'Expense',
    },
    {
      id: 4,
      date: '2025-07-10',
      category: 'Freelance',
      amount: 8000,
      type: 'Income',
    },
  ];

const navigate = useNavigate();

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6 relative">
        <h1 className="text-3xl font-bold">All Transactions</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + Add Transaction
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl overflow-hidden shadow">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-left">Amount</th>
              <th className="py-3 px-6 text-left">Type</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr
                key={txn.id}
                className="border-b hover:bg-blue-50 transition duration-200"
              >
                <td className="py-3 px-6">{txn.date}</td>
                <td className="py-3 px-6">{txn.category}</td>
                <td className="py-3 px-6">₹{txn.amount.toLocaleString()}</td>
                <td className={`py-3 px-6 font-semibold ${txn.type === 'Income' ? 'text-green-600' : 'text-red-500'}`}>
                  {txn.type}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="absolute bottom-6 right-6">
          <button
  onClick={() => navigate(-1)}
  className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition duration-300 mr-4"
>
  Back
</button>
          </div>
      </div>
    </div>
  );
};

export default Transactions;
