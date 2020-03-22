import React, { useState } from 'react';
import shortid from 'shortid'

import Error from './error';
//let errorMessage;
const Expense = ({ addExpenses, setCreateExpense,remainingBudget, setRemainingBudget }) => {
    
    const [expense, setExpense] = useState({
        expenseName: '',
        expenseAmount: ''
    });
    const [error, setError] = useState({
        status: false,
        errorMessage:'',
    });

    

    const saveEspense = e => {
        setExpense({
            ...expense,
            [e.target.name]: e.target.value
        })
    }
    const addExpese = e => {
        e.preventDefault();
        let { expenseName, expenseAmount } = expense;
        //validate
        if (expense.expenseAmount < 1 || isNaN(expense.expenseAmount)) {
            setError({ status: true, errorMessage:'Invalid expense amount'});
            return;
        } else if (expense.expenseName.trim() === '') {
            setError({ status: true, errorMessage:'Invalid expense name'});
            return;
        }else
            setError(false);
        //Create Expense
        const newExpense = {
            expenseName,
            expenseAmount,
            id: shortid.generate()
        }
        //Save new wxpense
        addExpenses(newExpense);
        setCreateExpense(true);

        //reset form
        expenseName = '';
        expenseAmount = '';
        setExpense({ expenseName, expenseAmount });
        //setRemainingBudget(remainingBudget-expense.expenseAmount)
    }

    return (  
        <form onSubmit={addExpese}>
            <h2>Add Expenses</h2>
            {console.log(`${error.status}---${error.errorMessage}`)}
            {error.status ? <Error errorMessage={error.errorMessage} /> : null}
            <div className="field">
                <label>Expense</label>
                <input type="text"
                    name="expenseName"
                    clas="u-full-width"
                    placeholder="I.e. Trasportation"
                    value={expense.expenseName}
                    onChange={saveEspense}
                />
            </div>
            <div className="field">
                <label>Expense AMount</label>
                <input type="number"
                    name="expenseAmount"
                    clas="u-full-width"
                    placeholder="I.e. 300"
                    value={expense.expenseAmount}
                    onChange={saveEspense}
                />
            </div>
            <input type="submit"
                className="button-primary u-full-width"
                value="Add Expense"
            />
                
        </form>
    );
}
 
export default Expense;