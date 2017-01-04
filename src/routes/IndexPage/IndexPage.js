import React from 'react';

import FolderTree from 'components/FolderTree';

import styles from './IndexPage.css';

const IndexPage = ({children}) => {
  return (
  <div className={styles.normal}>
<div className={styles.main}> Welcome to Pokemon Get App.<br></br> Press button to begin <br></br>
<button> <a className={styles.link} href="/pokemon">GET POKEMONS</a> </button>
</div>


    <FolderTree />
    </div>
  );
}

export default IndexPage;
