import React from 'react';
import RegionContext from '../contexts/RegionContext';
import UltimateContact from './UltimateContact';

class ContactAddress extends React.Component {
  static contextType = RegionContext;

  render() {
    var text = 'We do not have an office in your city.';

    if (this.context === 'india') {
      text = 'Our office is in New Delhi';
    } else if (this.context === 'usa') {
      text = 'Our office is in New York';
    } else if (this.context === 'uk') {
      text = 'Our office is in London';
    }

    return (
      <div className="container" style={{ marginTop: '2vh' }}>
        <h4>{text}</h4>
        <UltimateContact />
      </div>
    );
  }
}

export default ContactAddress;
