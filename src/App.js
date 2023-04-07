import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Expense from './components/Expense/Expense';
import NewExpense from './components/NewExpense/NewExpense';

const DummyData = [
  {title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
  {title: 'Toilet Paper', amount: 20.90, date: new Date(2021, 5, 28)},
  {title: 'Oil', amount: 10.80, date: new Date(2021, 2, 12)},
  {title: 'Rice', amount: 14.90, date: new Date(2021, 2, 28)},
];

const App = () => {  
  const [expense, setExpense] = useState(DummyData);

  const addExpenseHandler = (expenses) =>{
    setExpense(preExpense => {
      return [expenses, ...preExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense items={expense}></Expense>
    </div>
  );
}

export default App;
