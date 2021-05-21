import { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // log this to Sentry, Azure Monitor, new Relic TrackJS or whichever error tracking service you are using
    console.error('ErrorBoundary caught an error', error, info);
    setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  // componentDidUpdate() {
  //   if (this.state.hasError) {
  //   }
  // }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />;
    } else if (this.state.hasError) {
      return (
        <h2>
          This listing has an error. <Link to='/'>Click here to</Link> to go
          back to the home page or wait five seconds.
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
