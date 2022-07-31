import React from 'react';
import s from './styles/Buttons.module.css';
// import CALCULATOR_BUTTONS from "./CalculatorButtons";

const Buttons = ({
  inputHandler,
  clearInput,
  backspace,
  changePlusMinus,
  calculateAns,
}) => {
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      document.getElementById('equalbtn').click();
    }
  });

  return (
    <div className={s.showBtn}>
      <button className={(s.btn, s.exp)} onClick={inputHandler}>
        ^
      </button>
      <button className={(s.btn, s.exp)} onClick={inputHandler}>
        (
      </button>
      <button className={(s.btn, s.exp)} onClick={inputHandler}>
        )
      </button>
      <button className={(s.btn, s.exp)} onClick={inputHandler}>
        √
      </button>
      <button className={(s.btn, s.exp)} onClick={inputHandler}>
        x<sup>2</sup>
      </button>
      <button className={(s.btn, s.clr)} onClick={clearInput}>
        AC
      </button>
      <button className={(s.btn, s.clr)} onClick={backspace}>
        ⌫
      </button>
      <button className={(s.btn, s.exp)} onClick={inputHandler}>
        log
      </button>
      <button className={(s.btn, s.exp)} onClick={inputHandler}>
        ÷
      </button>
      <button className={(s.btn, s.exp)} onClick={inputHandler}>
        %
      </button>
      <button className={s.btn} onClick={inputHandler}>
        7
      </button>
      <button className={s.btn} onClick={inputHandler}>
        8
      </button>
      <button className={s.btn} onClick={inputHandler}>
        9
      </button>
      <button className={(s.btn, s.exp)} onClick={inputHandler}>
        x
      </button>
      <button className={(s.btn, s.exp)} onClick={inputHandler}>
        x<sup>3</sup>
      </button>
      <button className={s.btn} onClick={inputHandler}>
        4
      </button>
      <button className={s.btn} onClick={inputHandler}>
        5
      </button>
      <button className={s.btn} onClick={inputHandler}>
        6
      </button>
      <button className={(s.btn, s.exp)} onClick={inputHandler}>
        -
      </button>
      <button className={(s.btn, s.exp)} onClick={inputHandler}>
        <sup>3</sup>√
      </button>
      <button className={s.btn} onClick={inputHandler}>
        1
      </button>
      <button className={s.btn} onClick={inputHandler}>
        2
      </button>
      <button className={s.btn} onClick={inputHandler}>
        3
      </button>
      <button className={(s.btn, s.exp)} onClick={inputHandler}>
        +
      </button>
      <button className={(s.btn, s.exp)} onClick={inputHandler}>
        !
      </button>
      <button className={(s.btn, s.exp)} onClick={changePlusMinus}>
        ±
      </button>
      <button className={s.btn} onClick={inputHandler}>
        0
      </button>
      <button className={(s.btn, s.exp)} onClick={inputHandler}>
        .
      </button>
      <button
        className={(s.btn, s.exp, s.equal)}
        id="equalbtn"
        onClick={calculateAns}
      >
        =
      </button>
    </div>
  );
};

export default Buttons;
