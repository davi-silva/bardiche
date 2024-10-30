import React, { ChangeEvent, FC } from 'react';

import styles from './index.module.scss';
import { InputProps } from './types';

const Input: FC<InputProps> = ({ label, value, type, onChange }) => {
  const handleOnChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = event.currentTarget.value;
    onChange(value);
  };

  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      {type === 'textarea' ? (
        <textarea
          className={`${styles.input} ${
            type === 'textarea' ? styles.textarea : ''
          }`}
          value={value}
          onChange={handleOnChange}
        />
      ) : (
        <input
          className={styles.input}
          type={type}
          value={value}
          onChange={handleOnChange}
        />
      )}
    </div>
  );
};

export default Input;
