import { all, fork, call, put } from 'redux-saga/effects';
import products from './products';
import * as ActionCreator from '../actions/productActionCreator';
import * as produtService from '../services/products';


function* root() {
  yield all([
    fork(products),
  ]);
}

export default root;
