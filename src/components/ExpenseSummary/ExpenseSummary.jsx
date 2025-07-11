import './ExpenseSummary.css';
import { useEffect, useRef, useState } from "react";
import { animate } from "motion";
import { motion } from "framer-motion";

const ExpenseSummary = ({ total }) => {
  const amountRef = useRef();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (shouldAnimate && amountRef.current) {
      animate(
        parseFloat(amountRef.current.textContent.replace(/\D/g, "")) || 0,
        total,
        {
          duration: 1.2,
          ease: "circOut",
          onUpdate: (latest) => {
            amountRef.current.textContent = `$${latest.toFixed(2)}`;
          },
        }
      );
    }
  }, [total, shouldAnimate]);


  return (
    <motion.div
      className="expense-summary-container"
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onAnimationComplete={() => setShouldAnimate(true)}
    >
      <div className="total-gastado-content">
        <h2 className="total-gastado-title">Total Gastado</h2>
        <p
          className="total-gastado-amount"
          ref={amountRef}
          style={{ fontSize: "1.5rem", color: "white" }}
        >
          {total ? `$${total.toFixed(2)}` : "$0.00"}
        </p>
      </div>
      <div className="total-gastado-discover">
        <p className="total-gastado-discover-text">Limpiar</p>
      </div>
    </motion.div>
  );
};

export default ExpenseSummary;