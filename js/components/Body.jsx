import React from 'react';
import { connect } from 'react-redux';
import { Input, Label, Dropdown, Button } from 'semantic-ui-react';
import * as ActionCreator from '../actions/productActionCreator';
import ExchangeRateDropDown from './ExchangeRateDropDown';

const divStyle = {
  margin: '0 auto',
  width: '600px',
  // height: '500px',
  paddingTop: '10%',
};

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.handleAmtChange = this.handleAmtChange.bind(this);
    this.handleToCurrChange = this.handleToCurrChange.bind(this);
    this.handleFromCurrChange = this.handleFromCurrChange.bind(this);
    this.calculateRate = this.calculateRate.bind(this);
    this.state={
      fromAmt:0,
      toAmt:0,
      fromCurr: 'USD',
      toCurr: 'USD',
    };
  }

  calculateRate(amt, frmC, toC) {
    const {rates, base } = this.props.products;
    console.log('amt :', amt, 'frmC :', frmC, ' toC :', toC);
    
    if(base == frmC) {
      const exRate = rates[toC];
      this.setState({['toAmt']: exRate * amt});
    } else {
      const baseExRate = rates[frmC];
      const euroAmt = baseExRate / amt;
      const exRate = rates[toC];
      this.setState({['toAmt']: exRate * euroAmt});
    }
  }
  handleAmtChange(event) {
    if(!isNaN(event.target.value)) {
      this.setState({['fromAmt']: event.target.value});
      this.calculateRate(event.target.value, this.state.fromCurr, this.state.toCurr);
    }
  }
  handleToCurrChange(evn) {
    this.setState({['toCurr']: evn.target.innerHTML});
    this.calculateRate(this.state.fromAmt, this.state.fromCurr, evn.target.innerHTML);
  }
  handleFromCurrChange(evn) {
    this.setState({['fromCurr']: evn.target.innerHTML});
    this.calculateRate(this.state.fromAmt, evn.target.innerHTML, this.state.toCurr);
  }

  componentDidMount() {
    this.props.fetchExchangeRate();
  }
  render() {
    const { rates } = this.props.products;
    const ratesKeys = Object.keys(rates);
    const options = ratesKeys.map(item =>  { return {'key': item, 'text': item, 'value': item};} );
    return(<div style={divStyle}> 
      <div>Currency Converter : </div>
      <div>
        <Input label={<Dropdown defaultValue={this.state.fromCurr} name='from_curr' search options={options} onChange={this.handleFromCurrChange} />}
          labelPosition='right'
          placeholder='Enter Amount'
          value={this.state.fromAmt}
          name='from_amt'
          onChange={this.handleAmtChange}
        />
        <Button as='div' labelPosition='right'>
          <Button icon>
            <Dropdown defaultValue={this.state.toCurr} name='to_curr' search options={options} onChange={this.handleToCurrChange} />
          </Button>
          <Label as='a' basic pointing='left'>
            {this.state.toAmt}
          </Label>
        </Button>
      </div>
    </div>);
  }
}
const mapStateToProps = state =>({
  products: state.products,
});

const mapDispatchToProps = dispatch =>({
  fetchExchangeRate: () => dispatch(ActionCreator.fetchExchangeRate())
});

export default connect(mapStateToProps, mapDispatchToProps)(Body);
