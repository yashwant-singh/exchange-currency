import { all, call, takeLatest, put } from 'redux-saga/effects';
import * as Actions from '../actions/productAction';
import * as produtService from '../services/products';
import * as ActionCreator from '../actions/productActionCreator';

function* fetchExchangeRate() {
  try {
    const response = yield call(produtService.fetchExchangeRate);
    const jsonResponse = yield response.json();
    jsonResponse.rates[jsonResponse.base] = 1;
    yield put(ActionCreator.fetchExchangeRateSuccessfully(jsonResponse));
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
