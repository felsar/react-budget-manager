import React, {Fragment, useState} from 'react';

import Error from './error';

let errorMessage;

const Income = ({ setBudget, setRemainingBudget}) => {
    //define state
    const [amount, setAmount] = useState(0);
    const [error, setError] = useState(false);

    const defineBudget = e => {
        e.preventDefault();
        setAmount(parseInt(e.target.value));
    }

    const addBudget = e => {
        e.preventDefault();
        //validate
        if (amount < 1 || isNaN(amount)) {
            setError(true);
            errorMessage="Invalid Amount"
            return;
        }
        setError(false);
        //
        setBudget(amount);
        setRemainingBudget(amount)
    }
    
    return ( 
        <Fragment>
            <h2>Set Your Budget</h2>
            {error ? <Error errorMessage={errorMessage}/>: null}
            <form onSubmit={addBudget}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Set your budget"
                    onChange={defineBudget}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Define Budget"
                    
                />
            </form>
            </Fragment>

     );
}
 
export default Income;