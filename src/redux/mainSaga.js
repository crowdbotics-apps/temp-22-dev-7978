import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth39199Saga from '../features/EmailAuth39199/redux/sagas';
import EmailAuth39195Saga from '../features/EmailAuth39195/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth39199Saga,
EmailAuth39195Saga,
    
  ]);
}