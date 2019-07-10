import { all, call, takeLatest, put } from 'redux-saga/effects';
import products from './products';
import * as Actions from '../actions/productAction';
import * as produtService from '../services/products';
import * as ActionCreator from '../actions/productActionCreator';
// import * as produtService from '../services/products';


const rates = {
  'rates':
    {
      'CAD':1.4706,
      'HKD':8.7508,
      'ISK':141.9,
      'PHP':57.529,
      'DKK':7.4634,
      'HUF':325.46,
      'CZK':25.543,
      'AUD':1.6164,
      'RON':4.7265,
      'SEK':10.6338,
      'IDR':15832.67,
      'INR':76.781,
      'BRL':4.265,
      'RUB':71.4007,
      'HRK':7.3954,
      'JPY':121.93,
      'THB':34.551,
      'CHF':1.1137,
      'SGD':1.525,
      'PLN':4.263,
      'BGN':1.9558,
      'TRY':6.3843,
      'CNY':7.7155,
      'NOK':9.6983,
      'NZD':1.6937,
      'ZAR':15.8712,
      'USD':1.1205,
      'MXN':21.1827,
      'ILS':3.9974,
      'GBP':0.89975,
      'KRW':1325.05,
      'MYR':4.641
    },
  'base':'EUR',
  'date':'2019-07-09'
};
function* fetchExchangeRate() {
  try {
    let response = yield fetch('https://api.exchangeratesapi.io/latest');
    response = rates;
    response.base = 'USD';
    console.log(rates);
    // const response = yield call(produtService.fetchExchangeRate);
    // console.log('response :', response);
    yield put(ActionCreator.fetchExchangeRateSuccessfully(rates));
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
