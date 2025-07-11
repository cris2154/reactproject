import './ExpenseItem.css';
import { motion } from "framer-motion";

const ExpenseItem = ({ description, amount, date, onDelete, id }) => {
    return (
        <motion.li
            className="expense-item"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 50 }}
            transition={{ duration: 0.25 }}
        >
            <span>
                {description} - ${amount} en {date}
            </span>
            <button className="delete-btn" onClick={() => onDelete(id)}>❌</button>
        </motion.li>
    );
};

export default ExpenseItem;
