// src/components/ExpenseForm.jsx
import React, { useState } from 'react';

const categories = ['Food', 'Travel', 'Bills', 'Groceries', 'Other'];

const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !amount || !date || amount <= 0) {
        alert("Please enter a valid title, amount, and date.");
        return;
    }

    const expenseData = {
      id: Math.random().toString(), // Simple ID generation
      title,
      amount: parseFloat(amount), // Ensure amount is a number
      date: new Date(date), // Convert date string to Date object
      category,
    };

    onAddExpense(expenseData);

    // Reset form fields
    setTitle('');
    setAmount('');
    setDate('');
    setCategory(categories[0]);
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="form-actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;