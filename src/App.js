import React, {useState, useEffect} from 'react';
import Income from './componeents/income'
import Expense from './componeents/expense';
import ExpenseList from './componeents/expenseList';
import BudgetControl from './componeents/BudgetControl';

function App() {
  //Budget
  const [budget, setBudget] = useState(0);
  //RemainingBudget
  const [remainingBudget, setRemainingBudget] = useState(0)
  
  const [expenses, setExpenses] = useState([]);

  const [expense, setExpense] = useState({});

  const [createExpense, setCreateExpense] = useState(false);

  //UseEffect - Update remaining
  useEffect(() => {
    if (createExpense) {
      setExpenses([
        ...expenses,
        expense
      ]);
    }

    const remainig = remainingBudget - expense.expenseAmount;    
    setRemainingBudget(remainig);

    setCreateExpense(true);
  }, [expense, createExpense,expenses,remainingBudget])
/*
  const addExpenses = expense => {
    setExpenses([
      ...expenses,
      expense
    ]);
  }*/

  return (
    <div className="container App">
      <header>
        <h1>Weekly Budget</h1>
        <div className="content principal-content">
          {(budget < 1 || isNaN(budget)) ?
            (
              <Income
                setBudget={setBudget}
                setRemainingBudget={setRemainingBudget}
              />
            )
            :
            (
              <div className="row">
                <div className="one-half column">
                  <Expense
                    addExpenses={setExpense}
                    setCreateExpense={setCreateExpense}
                    remainingBudget={remainingBudget}
                    setRemainingBudget={setRemainingBudget}/>
                </div>
                <div className="one-half column">
                  <ExpenseList
                    expenses={expenses}
                  />
                  <BudgetControl
                    budget={budget}
                    remainingBudget={remainingBudget}/>
            </div>
              </div>
            )
          }

          
        </div>
        
      </header>
    </div>
  );
}

export default App;
