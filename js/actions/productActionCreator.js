import * as Actions from './productAction';
export const fetchExchangeRate = () =>({ type: Actions.FETCH_EXCHANGE_RATE });
export const fetchExchangeRateSuccessfully = data => ({ type: Actions.FETCH_EXCHANGE_RATE_SUCCESSFULLY, data });

