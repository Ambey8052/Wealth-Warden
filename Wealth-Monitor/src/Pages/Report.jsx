import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Report = () => {
  const pieData = [
    { name: 'Rent', value: 12000 },
    { name: 'Groceries', value: 2500 },
    { name: 'Entertainment', value: 1500 },
    { name: 'Savings', value: 8000 },
  ];

  const barData = [
    { name: 'Jan', Income: 30000, Expense: 14000 },
    { name: 'Feb', Income: 28000, Expense: 13000 },
    { name: 'Mar', Income: 32000, Expense: 16000 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const totalIncome = barData.reduce((sum, item) => sum + item.Income, 0);
  const totalExpense = barData.reduce((sum, item) => sum + item.Expense, 0);
  const totalSavings = totalIncome - totalExpense;

  const navigate = useNavigate();

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Monthly Report</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">Expense Distribution (Pie Chart)</h2>
          <PieChart width={350} height={300}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">Income vs Expense (Bar Chart)</h2>
          <BarChart width={500} height={300} data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Income" fill="#4CAF50" />
            <Bar dataKey="Expense" fill="#F44336" />
          </BarChart>
        </div>
      </div>

      
      <div className="bg-white mt-8 p-6 rounded-xl shadow relative "style={{ minHeight: '200px' }}>
        <ul className="text-lg space-y-2">
          <li>Total Income: <span className="font-bold text-green-600">₹{totalIncome.toLocaleString()}</span></li>
          <li>Total Expense: <span className="font-bold text-red-500">₹{totalExpense.toLocaleString()}</span></li>
          <li>Total Savings: <span className="font-bold text-blue-600">₹{totalSavings.toLocaleString()}</span></li>
        </ul>
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

export default Report;
