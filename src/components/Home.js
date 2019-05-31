import React, { Component } from 'react';
import logo from '../reactlogo.png';

class Home extends Component {
  render() {
    return (
      <div
        className="container-fluid"
        style={{ backgroundColor: '#0E3746', height: '100vh' }}
      >
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h1 style={contentStyle}>{this.props.heading}</h1>
            <p style={{ color: '#ffffff', marginLeft: '10vh' }}>
              This is what I built to revise React. React is a JavaScript
              library made by Facebook.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img src={logo} className="responsive" style={logoStyle} />
          </div>
        </div>
      </div>
    );
  }
}

const logoStyle = {
    marginTop: '12vh',
    width: '80%',
    height: 'auto',
    marginLeft: '10vh'
  },
  contentStyle = {
    color: '#ffffff',
    marginTop: '25vh',
    marginLeft: '10vh'
  };

export default Home;
