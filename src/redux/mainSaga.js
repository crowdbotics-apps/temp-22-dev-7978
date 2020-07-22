import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth39202Saga from '../features/EmailAuth39202/redux/sagas';
import EmailAuth39199Saga from '../features/EmailAuth39199/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth39202Saga,
EmailAuth39199Saga,
    
  ]);
}