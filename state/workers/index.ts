// ANCHOR: Redux Saga Import
import { spawn } from 'redux-saga/effects'

// ANCHOR: Worker Import
import { usersListWorker } from './modules/usersListWorker';

// ANCHOR: Root Workers
export function* rootWorkers() {
  yield spawn(usersListWorker)
}
