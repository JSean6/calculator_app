import React, { useState } from 'react';
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState('0');

  const appendToDisplay = (value) => {
    if (displayValue === '0' && value !== '.') {
      setDisplayValue(value);
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  const clearDisplay = () => {
    setDisplayValue('0');
  };

  const calculate = () => {
    try {
      setDisplayValue(eval(displayValue).toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  return (
    <div className="App">
      <div id="calculator" className="max-w-xs mx-auto mt-10 p-4 bg-white rounded-lg shadow-md">
        <div id="display" className="p-2 bg-gray-100 text-right text-lg font-semibold border border-gray-300 rounded-md">
          {displayValue}
        </div>
        <div className="grid grid-cols-4 gap-3 p-4 bg-gray-700 ">
          <button className="col-span-1 p-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold border border-gray-300 rounded-md" onClick={() => appendToDisplay('7')}>7</button>
          <button className="col-span-1 p-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold border border-gray-300 rounded-md" onClick={() => appendToDisplay('8')}>8</button>
          <button className="col-span-1 p-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold border border-gray-300 rounded-md" onClick={() => appendToDisplay('9')}>9</button>
          <button className="col-span-1 p-2 bg-gray-400 hover:bg-gray-500 text-gray-100 font-semibold border border-gray-300 rounded-md" onClick={() => appendToDisplay('/')}>÷</button>
          <button className="col-span-1 p-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold border border-gray-300 rounded-md" onClick={() => appendToDisplay('4')}>4</button>
          <button className="col-span-1 p-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold border border-gray-300 rounded-md" onClick={() => appendToDisplay('5')}>5</button>
          <button className="col-span-1 p-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold border border-gray-300 rounded-md" onClick={() => appendToDisplay('6')}>6</button>
          <button className="col-span-1 p-2 bg-gray-400 hover:bg-gray-500 text-gray-100 font-semibold border border-gray-300 rounded-md" onClick={() => appendToDisplay('*')}>x</button>
          <button className="col-span-1 p-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold border border-gray-300 rounded-md" onClick={() => appendToDisplay('1')}>1</button>
          <button className="col-span-1 p-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold border border-gray-300 rounded-md" onClick={() => appendToDisplay('2')}>2</button>
          <button className="col-span-1 p-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold border border-gray-300 rounded-md" onClick={() => appendToDisplay('3')}>3</button>
          <button className="col-span-1 p-2 bg-gray-400 hover:bg-gray-500 text-gray-100 font-semibold border border-gray-300 rounded-md" onClick={() => appendToDisplay('-')}>-</button>
          <button className="col-span-1 p-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold border border-gray-300 rounded-md" onClick={() => appendToDisplay('0')}>0</button>
          <button className="col-span-1 p-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold border border-gray-300 rounded-md" onClick={() => appendToDisplay('00')}>00</button>
          <button className="col-span-1 p-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold border border-gray-300 rounded-md" onClick={() => appendToDisplay('.')}>.</button>
          <button className="col-span-1 p-2 bg-gray-400 hover:bg-gray-500 text-gray-100 font-semibold border border-gray-300 rounded-md" onClick={clearDisplay}>AC</button>
          <button className="col-span-2 p-2 bg-gray-400 hover:bg-gray-500 text-gray-100 font-semibold border border-gray-300 rounded-md" onClick={calculate}>=</button>
          <button className="col-span-1 p-2 bg-gray-400 hover:bg-gray-500 text-gray-100 font-semibold border border-gray-300 rounded-md" onClick={() => appendToDisplay('+')}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
