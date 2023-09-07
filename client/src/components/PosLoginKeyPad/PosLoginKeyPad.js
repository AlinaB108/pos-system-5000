import React, { useState } from 'react';

const PosLoginKeyPad = () => {
  const [employeeNumber, setEmployeeNumber] = useState('');

  const appendToEmployeeNumber = (number) => {
    const newEmployeeNumber = employeeNumber + number;
    setEmployeeNumber(newEmployeeNumber);
  };

  const clearLoginAttempt = () => {
    setEmployeeNumber('');
  };

  const loginAttempt = () => {
    // add code to save to global state your id from loggin gin
  };

  return (
    <div>
      <h1>Enter Your Employee Number:</h1>
      <input type="text" value={employeeNumber} readOnly />
      <div className="keypad">
        <div className="key" onClick={() => appendToEmployeeNumber('1')}>1</div>
        <div className="key" onClick={() => appendToEmployeeNumber('2')}>2</div>
        <div className="key" onClick={() => appendToEmployeeNumber('3')}>3</div>
        <div className="key" onClick={() => appendToEmployeeNumber('4')}>4</div>
        <div className="key" onClick={() => appendToEmployeeNumber('5')}>5</div>
        <div className="key" onClick={() => appendToEmployeeNumber('6')}>6</div>
        <div className="key" onClick={() => appendToEmployeeNumber('7')}>7</div>
        <div className="key" onClick={() => appendToEmployeeNumber('8')}>8</div>
        <div className="key" onClick={() => appendToEmployeeNumber('9')}>9</div>
        <div className="key" onClick={() => clearLoginAttempt()}>CLEAR</div>
        <div className="key" onClick={() => appendToEmployeeNumber('0')}>0</div>
        <div className="key">GO</div>
      </div>
    </div>
  );
}

export default PosLoginKeyPad;