import React from 'react';
import { connect } from 'react-redux';
import { Input, Label } from 'semantic-ui-react';
import * as ActionCreator from '../actions/productActionCreator';
import ExchangeRateDropDown from './ExchangeRateDropDown';

const divStyle = {
  margin: '0 auto',
  width: '400px',
  height: '500px',
};

class Body extends React.Component {

  componentDidMount() {
    this.props.fetchExchangeRate();
  }
  render() {
    const { amount } = this.props;
    return(<div style={divStyle}> 
      <div>Currency Converter : </div>
      <div>
        <div>
          <Input placeholder='Amount' name='amount' value={amount} />
          <ExchangeRateDropDown />
          <Label>Output: </Label>
          
        </div>
      </div>
    </div>);
  }
}
const mapStateToProps = state =>({
  amount: state.products.amount,
});

const mapDispatchToProps = dispatch =>({
  fetchExchangeRate: () => dispatch(ActionCreator.fetchExchangeRate())
});

export default connect(mapStateToProps, mapDispatchToProps)(Body);
