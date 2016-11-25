import React from 'react';
import styles from './New.css';
export default ({fields,mods,hex}) => (
  <div className={styles.normal}>
  New components <br/>
  {fields} <br/>
  {mods} <br/>
  {hex}
  </div>
);
