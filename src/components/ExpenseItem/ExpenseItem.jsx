
import './ExpenseItem.css';
const ExpenseItem = ({ description, amount, date, onDelete ,id}) => {
    return (
    <li className="expense-item">
  <span>
    {description} - ${amount} en {date}
  </span>
  <button className="delete-btn" onClick={() => onDelete(id)}>❌</button>
</li>

    );
    
};

export default ExpenseItem;
