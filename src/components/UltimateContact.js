import React from 'react';
import RegionContext from '../contexts/RegionContext';

class ContactAddress extends React.Component {
  renderContent(value) {
    if (value === 'india') {
      return 'Our New Delhi office is located in Lajpat Nagar.';
    } else if (value === 'usa') {
      return 'Our New Delhi office is located in Manhatten.';
    } else if (value === 'uk') {
      return 'Our New Delhi office is located in Oxford Street.';
    }
  }

  render() {
    return (
      <div className="container">
        <RegionContext.Consumer>
          {value => this.renderContent(value)}
        </RegionContext.Consumer>
      </div>
    );
  }
}

export default ContactAddress;
