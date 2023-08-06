import React from 'react';
import css from './Filter.module.css';
export const Filter = ({ value, changeValue }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <label className={css.filter__label}>
        <span>Find contacts by name</span>
        <input type="text" value={value} name="filter" onChange={changeValue} />
      </label>
    </div>
  );
};
