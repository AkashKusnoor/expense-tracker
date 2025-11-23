// src/components/ExpenseItem.jsx
import React from 'react';

const ExpenseItem = ({ title, amount, date, category }) => {
  // Format date to a readable string
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  // Determine the CSS class based on the category
  const categoryClass = `category-${category.toLowerCase()}`;

  // Format amount to currency
  const formattedAmount = `$${amount.toFixed(2)}`;

  return (
    <li className="expense-item">
      <div className="expense-item-info">
        <div className="expense-item-title">{title}</div>
        <div className="expense-item-date">{formattedDate}</div>
      </div>
      <div className={`expense-item-amount ${categoryClass}`}>
        {formattedAmount}
      </div>
    </li>
  );
};

export default ExpenseItem;