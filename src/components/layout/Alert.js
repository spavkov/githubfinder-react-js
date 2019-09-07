import React from 'react';

const Alert = ({alert}) => {

    if (alert)
    {
        return (
            <div className={`alert alert-${alert.type}`}>            
            <i className="fas fa-info-circle"></i> {alert.message}
            </div>
        );
    }
    return "";
}

export default Alert