import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
// import {Link} from  'dva/router'

function IndexPage(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
        {/*<Link to={{pathname:'/products'}}>go to products</Link>*/}
        <button onClick={goP.bind(props)}>go to products</button>
      </ul>
    </div>
  );
}

function goP (){
  this.history.replace('/products')
}
IndexPage.propTypes = {
};

export default connect()(IndexPage);
