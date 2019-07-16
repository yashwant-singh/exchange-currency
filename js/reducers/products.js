import * as Actions from '../actions/productAction';
const initialState = {
  fromAmt: '',
  toAmt: '',
  fromCurr: 'USD',
  toCurr: 'USD',
  rates: {},
};

export default function products(state = initialState, action = {}) {
  const { type } = action;
  switch(type) {
  
  case Actions.FETCH_EXCHANGE_RATE_SUCCESSFULLY: {
    const { data } = action;
    return {...state, ...data };
  }
  default: {
    return state;
  }
  }
}
