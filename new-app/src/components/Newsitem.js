import React, { Component } from 'react';

export default class Newsitem extends Component {
  render() {
    const { title, desc, imgUrl } = this.props;

    return (
      <>
        <div>
          <div className="card" style={{ width: '18rem' }}>
            <img src={imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{desc}</p>
              <a href="/" className="btn btn-primary">READ MORE</a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
