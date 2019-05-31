import React, { Component } from 'react';
import ContactArea from './ContactArea';
import RegionContext from '../contexts/RegionContext';

class Contact extends Component {
  state = { contact: 'india' };

  onRegionChange = region => {
    this.setState({ contact: region });
  };

  render() {
    return (
      <div className="container" style={{ marginTop: '1vh' }}>
        <h2>Using Context</h2>
        <div>
          <h4>Select Your Region : </h4>
          <button
            className="btn btn-dark"
            onClick={() => this.onRegionChange('india')}
          >
            India
          </button>
          <button
            className="btn btn-dark"
            onClick={() => this.onRegionChange('usa')}
            style={{ marginLeft: '1vh' }}
          >
            USA
          </button>
          <button
            className="btn btn-dark"
            onClick={() => this.onRegionChange('uk')}
            style={{ marginLeft: '1vh' }}
          >
            UK
          </button>
        </div>
        <RegionContext.Provider value={this.state.contact}>
          <ContactArea />
        </RegionContext.Provider>
      </div>
    );
  }
}

export default Contact;
