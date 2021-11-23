import * as React from 'react';
import App from 'next/app';

// ANCHOR: General Imports
import { listenToCurrentUserState } from '@utilities/authenticate-old';

// ANCHOR: Redux Imports
import { reduxStore } from '@state/store';
import { Provider as ReduxProvider } from 'react-redux';

// ANCHOR: User Current State
listenToCurrentUserState();

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ReduxProvider store={reduxStore}>
        <Component {...pageProps} />
      </ReduxProvider>
    );
  }
}
