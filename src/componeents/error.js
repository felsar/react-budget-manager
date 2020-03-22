import React from 'react';

const Error = ({ errorMessage='Error'}) => {
    return ( 
        <p className="alert alert-danger error">
            {errorMessage}
        </p>
     );
}
 
export default Error;