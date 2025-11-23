// src/components/ExpenseTracker.jsx
import React, { useState, useMemo } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import ExpensesFilter from './ExpensesFilter';
import TotalExpenses from './TotalExpenses';

// Initial dummy data
const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Groceries', amount: 94.12, date: new Date(2025, 0, 14), category: 'Groceries' },
  { id: 'e2', title: 'Train Ticket', amount: 279.50, date: new Date(2025, 1, 12), category: 'Travel' },
  { id: 'e3', title: 'Power Bill', amount: 88.45, date: new Date(2025, 1, 28), category: 'Bills' },
  { id: 'e4', title: 'Dinner Out', amount: 45.00, date: new Date(2025, 2, 20), category: 'Food' },
];

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [selectedMonth, setSelectedMonth] = useState('all'); // 'all' or month index (0-11)
  const [selectedCategory, setSelectedCategory] = useState('All'); // 'All' or category string

  // Function to add a new expense
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      // Add the new expense at the beginning of the list
      return [expense, ...prevExpenses];
    });
  };
  
  // Filtering Logic using useMemo for performance
  const filteredExpenses = useMemo(() => {
    return expenses.filter((expense) => {
      const isMonthMatch = selectedMonth === 'all' || expense.date.getMonth() === selectedMonth;
      const isCategoryMatch = selectedCategory === 'All' || expense.category === selectedCategory;
      
      return isMonthMatch && isCategoryMatch;
    });
  }, [expenses, selectedMonth, selectedCategory]);

  return (
    <div className="expense-tracker">
      <h1> Expense Tracker Dashboard</h1>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      
      <ExpensesFilter 
        selectedMonth={selectedMonth}
        onMonthChange={setSelectedMonth}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      <ExpenseList expenses={filteredExpenses} />
      
      <TotalExpenses expenses={filteredExpenses} />
    </div>
  );
};

export default ExpenseTracker;