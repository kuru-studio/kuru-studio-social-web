// ANCHOR: Redux Import
import { createStore } from 'redux';
import { rootReducers } from '@state/reducers';

// ANCHOR: Initialize Redux Store
export const reduxStore = createStore(rootReducers);
