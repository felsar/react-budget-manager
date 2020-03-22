import React, { Fragment } from 'react';
import { reviewBudget } from './../helper';

const BudgetControl = ({budget, remainingBudget }) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Budget: ${budget}
            </div>
            <div className={reviewBudget(budget,remainingBudget)}>
                Remaining: ${remainingBudget}
            </div>
        </Fragment>
    )
}

export default BudgetControl;
