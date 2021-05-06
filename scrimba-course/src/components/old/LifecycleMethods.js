import React, { Component } from 'react';

// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

class TodoList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    // return new updated state based upon the props
    // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
  }

  getSnapshotBeforeUpdate() {
    // create a backup of the current way things are
  }

  componentWillMount() {
    //  ! Deprecated
  }

  componentDidMount() {
    // component was born (if it were human)
    // GET the data I need to correctly display
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.whatever !== this.props.whatever) {
      // do some code
    }
    // ! Deprecated
  }

  shouldComponentUpdate(nextProps, nexState) {
    // making a decision if component needs to change or not
    // component wil re-render otherwise, can allow for more optimization
    // return true if update is needed or false if it isn't
  }

  componentWillUnmount() {
    // teardown or cleanup your code before your component disappears
    // remove event listener for example
  }

  componentWillUpdate() {
    // ! Deprecated
  }

  componentDidUpdate(prevProps, prevState) {
    //what to do when component updates
  }

  render() {
    return <div>Code goes here</div>;
  }
}
