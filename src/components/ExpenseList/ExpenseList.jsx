import { ExpenseItem } from "../index.jsx";
import './ExpenseList.css';
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const ExpenseList = ({ expenses, onDelete }) => {
    const [showItems, setShowItems] = useState(false);

    // Obtener mes y año actual
    const now = new Date();
    const meses = [
        "Ene", "Feb", "Mar", "Abr", "May", "Jun",
        "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
    ];
    const mesActual = meses[now.getMonth()];
    const añoActual = now.getFullYear();

    return (
        <motion.ul
            className="chill2-list"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onAnimationComplete={() => setShowItems(true)}
        >
            <div className="expenses-header">
                <h2 className="expenses-title">{mesActual}</h2>
                <h3 className="expenses-title">{añoActual}</h3>
                <p className="expenses-date">{`${meses[now.getMonth()]} ${añoActual}`}</p>
                <p className="expenses-subtitle">Minimalism style</p>
            </div>
            <AnimatePresence>
                {showItems &&
                    expenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            id={expense.id}
                            description={expense.description}
                            amount={expense.amount}
                            date={expense.date}
                            onDelete={onDelete}
                        />
                    ))}
            </AnimatePresence>
        </motion.ul>
    );
};

export default ExpenseList;

