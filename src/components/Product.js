import React, { Component } from 'react';

export default class extends Component {
  render() {
    return (
      <div className='item'>
        <div className='image'>
          <img src={require(`../${this.props.product_image_url}`)} />
        </div>
        <div className='middle aligned content'>
          <div className='ui grid'>
            <div className='twelve wide column'>
              <div className='header'>
                <a href={this.props.url}>
                  {this.props.title}
                </a>
              </div>
              <div className='meta'>
                <span></span>
              </div>
              <div className='description'>
                <p>{this.props.description}</p>
              </div>
              <div className='extra'>
                <span>Submitted by:</span>
                <img
                  className='ui avatar image'
                  src={require(`../${this.props.submitter_avatar_url}`)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
