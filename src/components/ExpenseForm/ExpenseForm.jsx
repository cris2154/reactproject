import './ExpenseForm.css';
import { useState } from "react";

const ExpenseForm = ({ handleAddExpense }) => {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

    const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: Date.now(), // Generación directa del ID
        description,
        amount,
        date,
    };

    handleAddExpense(newExpense);
    console.log("Gasto agregado:", newExpense);

    // Reset de campos
    setDescription("");
    setAmount(0);
    setDate(new Date().toISOString().split("T")[0]);
    };

    return (
    <div className="form-container">
  <h2 className="form-title">Agregar Gasto</h2>
  
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label  htmlFor="description">Descripción:</label>
      <input required
        id="description"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripción del gasto"
      />
    </div>
    
    <div className="form-group">
      <label htmlFor="amount">Monto:</label>
      <input required min="10"
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
</div>
    );
};

export default ExpenseForm;
