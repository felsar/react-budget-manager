import React from 'react';
import PropTypes from 'prop-types';

import ExpenseDisplay from './expenseDisplay'

const ExpenseList = ({expenses}) => {
    return ( 
        <div className="expenses">
            <h2>Expenses</h2>
            {expenses.map(
                expense => (
                    <ExpenseDisplay
                        key={expense.id}
                        expense={expense}
                    />
                )
            )

            }
        </div>
     );
}
 
ExpenseList.propTypes = {
    expense: PropTypes.array.isRequired,
}
export default ExpenseList;