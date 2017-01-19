import React, { Component } from 'react';
import Product from './Product';

export default class ProductList extends Component {
  render() {
    const products = this.props.data.map((product) => {
      return (
        <Product
          id={product.id}
          description={product.description}
          title={product.title}
          votes={product.votes}
          submitter_avatar_url={product.submitter_avatar_url}
          product_image_url={product.product_image_url}
          key={"product-" + product.id}
        />
      );
    });

    return (
      <div className="ui items">
        {products}
      </div>
    )
  }
}
