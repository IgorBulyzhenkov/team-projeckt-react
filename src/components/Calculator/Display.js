import React from 'react';
import s from './styles/Display.module.css';

const Display = ({ input, setInput, answer }) => {
  const onChangeTagInput = e => {
    const re = /^[!%(-+\x2D-9^glox\xF7\u221A]+$/;

    if (e.target.value === '' || re.test(e.target.value)) {
      setInput(e.target.value);
    }
  };

  return (
    <>
      <div className={s.display}>
        {answer === '' ? (
          <>
            <input
              type="text"
              name="input"
              className={s.input}
              style={{ padding: '29px' }}
              value={input}
              placeholder="0"
              maxLength={12}
              // disabled
              onChange={onChangeTagInput}
              autoComplete="off"
            />
          </>
        ) : (
          <>
            <input
              type="text"
              name="input"
              className={s.value}
              value={input}
              placeholder="0"
              maxLength={12}
              disabled
            />
            <input
              type="text"
              name="value"
              className={s.input}
              value={answer}
              disabled
            />
          </>
        )}
      </div>
    </>
  );
};

export default Display;
