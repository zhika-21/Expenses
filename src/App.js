import React from 'react';
import Expenses from './components/Expenses/Expenses';

const App=()=> {
  const expenses = [
    {
      id: 'e1',
      title: 'Paper',
      amount: 99.12,
      date: new Date(2022, 2, 4),
    },
    { id: 'e2', title: 'New TV', amount: 599.49, date: new Date(2022, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 2, 18),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2022, 2, 22),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;