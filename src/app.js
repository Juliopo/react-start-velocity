import Data from './data';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import css from './style.css';
import ProductList from './components/ProductList';


export default class App extends Component {
  render() {
    return (
      <ProductList data={Data} />
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('content'));
