import * as Actions from '../actions/productAction';
const initialState = {
  from: 'USD',
  to: 'USD',
  amount: 1,
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
