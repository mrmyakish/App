import React from 'react';
import styles from './Pika.css';
import fetch from 'dva/fetch';
class Pika extends React.Component {
  render () {
    console.log(this.props);
    return (
      <div>
      sdfsd
    {this.props.url.url}
    </div>
    )
  }
}
export default Pika;
