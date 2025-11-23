// src/components/ExpensesFilter.jsx
import React from 'react';

const availableMonths = [
    { value: 'all', label: 'All Months' },
    { value: 0, label: 'January' },
    { value: 1, label: 'February' },
    { value: 2, label: 'March' },
    { value: 3, label: 'April' },
    { value: 4, label: 'May' },
    { value: 5, label: 'June' },
    { value: 6, label: 'July' },
    { value: 7, label: 'August' },
    { value: 8, label: 'September' },
    { value: 9, label: 'October' },
    { value: 10, label: 'November' },
    { value: 11, label: 'December' },
];

const availableCategories = ['All', 'Food', 'Travel', 'Bills', 'Groceries', 'Other'];

const ExpensesFilter = ({ selectedMonth, onMonthChange, selectedCategory, onCategoryChange }) => {
  const handleMonthChange = (event) => {
    // Convert string back to number for month filtering, or keep 'all'
    const value = event.target.value === 'all' ? 'all' : parseInt(event.target.value);
    onMonthChange(value);
  };

  const handleCategoryChange = (event) => {
    onCategoryChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="filter-control">
        <label>Filter by Month</label>
        <select value={selectedMonth} onChange={handleMonthChange}>
          {availableMonths.map(month => (
            <option key={month.value} value={month.value}>
              {month.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="filter-control">
        <label>Filter by Category</label>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          {availableCategories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;