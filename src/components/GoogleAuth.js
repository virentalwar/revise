import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '76970026782-l8vg30sid0o0cj7mods1tqnr7gpe5hlj.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button className="btn btn-danger" onClick={this.onSignOut}>
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="btn btn-danger" onClick={this.onSignIn}>
          Sign In With Google
        </button>
      );
    }
  }

  render() {
    return (
      <div>
        <h3>{this.renderAuthButton()}</h3>
      </div>
    );
  }
}

export default GoogleAuth;
