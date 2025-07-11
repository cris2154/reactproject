import { useState, useEffect } from 'react';
import { ExpenseForm, ExpenseList, ExpenseSummary } from './components/index.jsx';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState(() => {
    const stored = localStorage.getItem("expenses");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleDeleteEExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div className="app">
      <div className="main-layout">
        <div className="left-panel">
          <ExpenseForm handleAddExpense={handleAddExpense} />
          <ExpenseSummary total={total} />
        </div>
        <div className="right-panel">
          <ExpenseList expenses={expenses} onDelete={handleDeleteEExpense} />
        </div>
      </div>
    </div>
  );
}

export default App;
