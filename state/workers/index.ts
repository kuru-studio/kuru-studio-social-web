// ANCHOR: Redux Saga Import
import { spawn } from 'redux-saga/effects'

// ANCHOR: Worker Import
import { usersListWorker } from '@state/workers/modules/usersListWorker';

// ANCHOR: Root Workers
export function* rootWorkers() {
  yield spawn(usersListWorker)
}
