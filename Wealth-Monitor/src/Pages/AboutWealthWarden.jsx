import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { CheckCircle2, TrendingUp, ShieldCheck, BarChart3 } from 'lucide-react';

const features = [
  { icon: <CheckCircle2 />, title: 'Smart Budgeting', desc: 'Set monthly limits, track spending & avoid overspending.' },
  { icon: <TrendingUp />, title: 'Investment Tracking', desc: 'Monitor stocks, crypto, mutual funds in one place.' },
  { icon: <ShieldCheck />, title: 'Secure Data Vault', desc: 'Encrypted storage for your financial data.' },
  { icon: <BarChart3 />, title: 'Insightful Reports', desc: 'Visualize income, expenses & savings over time.' },
];

const pieData = [
  { name: 'Rent', value: 400 },
  { name: 'Food', value: 300 },
  { name: 'Savings', value: 200 },
  { name: 'Entertainment', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AboutWealthWarden = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-gray-100 text-gray-800">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Why Choose Wealth-Warden?</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Wealth-Warden is your smart companion for managing income, expenses, and investments with ease.
          Designed to empower individuals, students, and professionals to take control of their financial future.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <img
            src="https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?cs=srgb&dl=pexels-cottonbro-3943723.jpg&fm=jpg"
            alt="finance illustration"
            className="rounded-xl shadow-xl w-full"
          />
          <p className="text-md text-gray-700">
            With Wealth-Warden, analyze your cash flow, avoid financial pitfalls, and build a secure future. Our platform
            is intuitive, fast, and enriched with analytics for smarter decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow p-6 flex flex-col items-start">
              <div className="text-blue-600 text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-xl mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Where Your Money Goes</h2>
        <div className="max-w-md mx-auto">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name }) => name}
                outerRadius={100}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-16 text-center max-w-4xl mx-auto text-lg text-gray-700">
        <p>
          Whether you're a student trying to manage a limited budget, a professional aiming for better savings,
          or a business owner who wants full financial visibility — Wealth-Warden adapts to your needs. 
          Its reports and AI-driven insights help you save smarter, spend wiser, and plan better.
        </p>
        <p className="mt-4 font-semibold text-blue-600">
          Start today, and make every rupee count!
        </p>
      </div>
    </div>
  );
};

export default AboutWealthWarden;
