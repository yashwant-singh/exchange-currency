import { call, put, takeLatest } from 'redux-saga/effects';
import * as produtService from '../services/products';
import * as Actions from '../actions/productAction';
import * as ActionCreator from '../actions/productActionCreator';

function* fetchExchangeRate() {
  try {
    const response = yield call(produtService.fetchExchangeRate);
    console.log('response :', response);
    // yield put(ActionCreator.productFetchedSuccessfully(productResponse.data));
  } catch (error) {
    console.log('Error :-', error);
  }
}
export default function* products() {
  yield[
    takeLatest(Actions.FETCH_EXCHANGE_RATE, fetchExchangeRate),
  ];
}

