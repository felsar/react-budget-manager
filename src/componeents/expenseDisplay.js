import React from 'react';

const ExpenseDisplay = ({expense}) => {
    return ( 
        <li className="expenses">
            <p>
                {expense.expenseName}
                <span className="expense">${expense.expenseAmount}</span>
            </p>
        </li>
     );
}
 
export default ExpenseDisplay;