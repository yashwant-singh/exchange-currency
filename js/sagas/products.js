import { call, put, takeLatest } from 'redux-saga/effects';
import * as produtService from '../services/products';
import * as Actions from '../actions/productAction';
import * as ActionCreator from '../actions/productActionCreator';

function* fetchProducts() {
  console.log('Fetching products');
  try {
    const loginResponse = yield call(produtService.loginThyrocare, 'dummy', 'dummypwd', 'DSA');
    const productResponse = yield call(produtService.fetchProducts, loginResponse.data.API_KEY, 'ALL');
    console.log(productResponse);
    yield put(ActionCreator.productFetchedSuccessfully(productResponse.data));
  } catch (error) {
    console.log('Error :-', error);
  }
}
export default function* products() {
  yield[
    takeLatest(Actions.FETCH_PRODUCT, fetchProducts),
  ];
}

