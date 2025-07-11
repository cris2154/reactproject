import './ExpenseSummary.css';
const ExpenseSummary=({total})=>{
    return(
    <>
    <div className="expense-summary-container">
      <div className="total-gastado-content">
        <h2 className="total-gastado-title">
          Total Gastado
        </h2>
        <p className="total-gastado-amount">
          ${total}
        </p>
      </div>
      
      <div className="total-gastado-discover">
        <p className="total-gastado-discover-text">
          Limpiar
        </p>
      </div>
    </div>
    </>
  );
};

export default ExpenseSummary;