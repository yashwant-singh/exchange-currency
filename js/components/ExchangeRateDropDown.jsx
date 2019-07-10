import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';

const friendOptions = [
  {
    key: 'Jenny Hess',
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'Elliot Fu',
    text: 'Elliot Fu',
    value: 'Elliot Fu',
    image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
  },
  {
    key: 'Stevie Feliciano',
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano',
    image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
  },
  {
    key: 'Christian',
    text: 'Christian',
    value: 'Christian',
    image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
  },
  {
    key: 'Matt',
    text: 'Matt',
    value: 'Matt',
    image: { avatar: true, src: '/images/avatar/small/matt.jpg' },
  },
  {
    key: 'Justen Kitsune',
    text: 'Justen Kitsune',
    value: 'Justen Kitsune',
    image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
  },
];

const ExchangeRateDropDown = props => {
  const { rates } = props;
  const ratesKeys = Object.keys(rates);
  const options = ratesKeys.map(item =>  { return {'key': item, 'text': item, 'value': item};} );
  console.log('Rates on dropdown :', ratesKeys);
  return (<div>
    <Dropdown
      placeholder='Select From Exc Rate'
      openOnFocus
      selection
      options={options}
    />{' '}
    <label> TO </label>
    <Dropdown
      placeholder='Select To Exc Rate'
      openOnFocus={false}
      selection
      options={options}
    />
  </div>);
}
;

const mapStateToProps = state =>({
  rates: state.products.rates,
});

export default connect(mapStateToProps, null)(ExchangeRateDropDown);
