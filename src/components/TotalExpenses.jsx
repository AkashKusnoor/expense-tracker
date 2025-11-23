// src/components/TotalExpenses.jsx
import React from 'react';

const TotalExpenses = ({ expenses }) => {
  // Use reduce to sum up all amounts
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  
  const formattedTotal = `$${total.toFixed(2)}`;

  return (
    <div className="total-expenses">
      Total Expenses: {formattedTotal}
    </div>
  );
};

export default TotalExpenses;