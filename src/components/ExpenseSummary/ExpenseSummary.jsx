import './ExpenseSummary.css';
import { useEffect, useRef } from "react";
import { animate } from "motion";

const ExpenseSummary = ({ total }) => {
  const amountRef = useRef();

  useEffect(() => {
    if (amountRef.current) {
      animate(
        parseFloat(amountRef.current.textContent.replace(/\D/g, "")) || 0,
        total,
        {
          duration: 1.2,
          ease: "circOut",
          onUpdate: (latest) => {
            amountRef.current.textContent = `$${Math.round(latest)}`;
          },
        }
      );
    }
  }, [total]);

  return (
    <div className="expense-summary-container">
      <div className="total-gastado-content">
        <h2 className="total-gastado-title">Total Gastado</h2>
        <p
          className="total-gastado-amount"
          ref={amountRef}
          style={{ fontSize: "1.5rem", color: "white" }}
        >
          ${total}
        </p>
      </div>
      <div className="total-gastado-discover">
        <p className="total-gastado-discover-text">Limpiar</p>
      </div>
    </div>
  );
};

export default ExpenseSummary;