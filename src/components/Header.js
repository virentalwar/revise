import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import GoogleAuth from './GoogleAuth';

class Header extends Component {
  state = { button: 'home' };

  activateHome = () => {
    this.setState({ button: 'home' });
  };

  activateAbout = () => {
    this.setState({ button: 'about' });
  };

  activateServices = () => {
    this.setState({ button: 'services' });
  };

  activateContact = () => {
    this.setState({ button: 'contact' });
  };

  renderContent() {
    if (this.state.button === 'home') {
      return <Home heading="Revisin' React" />;
    } else if (this.state.button === 'about') {
      return <About />;
    } else if (this.state.button === 'services') {
      return <Services />;
    } else if (this.state.button === 'contact') {
      return <Contact />;
    } else return <Home heading="Revisin' React" />;
  }

  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={navbarStyle}
        >
          <a
            className="navbar-brand"
            style={aStyle}
            onClick={this.activateHome}
          >
            Revisin' React
          </a>
          <a
            className="navbar-toggler"
            type="a"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={this.activateHome}
                  style={aStyle}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={this.activateAbout}
                  style={aStyle}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={this.activateServices}
                  style={aStyle}
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={this.activateContact}
                  style={aStyle}
                >
                  Contact
                </a>
              </li>
            </ul>
            <div style={{ marginTop: '1vh' }}>
              <GoogleAuth />
            </div>
          </div>
        </nav>
        {this.renderContent()}
      </div>
    );
  }
}

const aStyle = {
    border: 0,
    backgroundColor: '#0E3746',
    color: '#ffffff',
    cursor: 'pointer',
    marginRight: '5vh'
  },
  navbarStyle = {
    backgroundColor: '#0E3746'
  };

export default Header;
