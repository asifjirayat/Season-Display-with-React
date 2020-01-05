import React from 'react';

const Alert = (props) => {
  return(
    <div className={`ui ${props.type} message`}>
      <div className="header">
        {props.header}
      </div>
      Error: {props.message}
    </div>
  );
}

Alert.defaultProps = {
  type: 'info',
  message: ''
}

export default Alert;