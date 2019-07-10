import { all, call, takeLatest, put } from 'redux-saga/effects';
import * as Actions from '../actions/productAction';
import * as ActionCreator from '../actions/productActionCreator';
import * as produtService from '../services/products';

function* fetchExchangeRate() {
  try {    
    let response = yield call(produtService.fetchExchangeRate);
    response.base = 'USD';
    yield put(ActionCreator.fetchExchangeRateSuccessfully(response));
  } catch (error) {
    console.log('Error :-', error);
  }
}

function* root() {
  yield all([
    takeLatest(Actions.FETCH_EXCHANGE_RATE, fetchExchangeRate),
  ]);
}

export default root;
