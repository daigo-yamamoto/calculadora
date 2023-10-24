import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';

function App() {
  const dispatch = useDispatch();
  const resultado = useSelector(state => state.resultado);
  const inputAtual = useSelector(state => state.inputAtual);

  const appendInput = (value) => {
    dispatch({ type: "SET_INPUT", payload: inputAtual + value });
  };

  return (
    <div className="App">
      <h1>Calculadora Redux</h1>
      <div className="display">
        <input 
          type="text"
          value={inputAtual}
          readOnly
        />
      </div>
      <div className="buttons">
        <div className="row">
          {[7,8,9].map(num => (
            <button key={num} onClick={() => appendInput(num.toString())}>{num}</button>
          ))}
          <button onClick={() => appendInput('+')}>+</button>
        </div>
        <div className="row">
          {[4,5,6].map(num => (
            <button key={num} onClick={() => appendInput(num.toString())}>{num}</button>
          ))}
          <button onClick={() => appendInput('-')}>-</button>
        </div>
        <div className="row">
          {[1,2,3].map(num => (
            <button key={num} onClick={() => appendInput(num.toString())}>{num}</button>
          ))}
          <button onClick={() => appendInput('*')}>x</button>
        </div>
        <div className="row">
          <button onClick={() => appendInput('0')}>0</button>
          <button onClick={() => dispatch({ type: "RESET" })}>C</button>
          <button onClick={() => dispatch({ type: "CALCULATE" })}>=</button>
          <button onClick={() => appendInput('/')}>÷</button>
        </div>
      </div>
      <h2>Resultado: {resultado}</h2>
    </div>
  );
}

export default App;

