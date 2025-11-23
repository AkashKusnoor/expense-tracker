// src/components/ExpenseList.jsx
import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses }) => {
  if (expenses.length === 0) {
    return <p style={{ textAlign: 'center', marginTop: '20px' }}>No expenses found.</p>;
  }

  return (
    <ul className="expense-list">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          category={expense.category}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;