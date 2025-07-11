import './ExpenseForm.css';
import { useState } from "react";
import { motion } from "framer-motion";

const ExpenseForm = ({ handleAddExpense }) => {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newExpense = {
            id: Date.now(),
            description,
            amount,
            date,
        };

        handleAddExpense(newExpense);
        setDescription("");
        setAmount(0);
        setDate(new Date().toISOString().split("T")[0]);
    };

    return (
        <motion.div
            className="form-container"
            initial={{ x: -300, opacity: 0 }} // <- Cambia aquí a negativo
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <h2 className="form-title">Agregar Gasto</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="description">Descripción:</label>
                    <input
                        required
                        id="description"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Descripción del gasto"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Monto:</label>
                    <input
                        required
                        min="10"
                        id="amount"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        placeholder="0.00"
                        step="0.01"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Fecha:</label>
                    <input
                        id="date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <button type="submit" className="submit-btn">
                    Agregar Gasto
                </button>
            </form>
        </motion.div>
    );
};

export default ExpenseForm;
