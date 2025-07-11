import { ExpenseItem } from "../index.jsx";
import './ExpenseList.css';
const ExpenseList = ({ expenses, onDelete }) => {
    return (
    
<ul className="chill2-list">
  <div className="expenses-header">
    <h2 className="expenses-title">Jul</h2>
    <h3 className="expenses-title">2025</h3>
    <p className="expenses-date">Julio 2025</p>
    <p className="expenses-subtitle">Minimalism style</p>
  </div>
  
  {expenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      id={expense.id}
      description={expense.description}
      amount={expense.amount}
      date={expense.date}
      onDelete={onDelete}
    />
  ))}
</ul>
    );
};

export default ExpenseList;

