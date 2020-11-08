import React from 'react';
import { connect } from 'react-redux';


class Counter extends React.Component {
 
  
  render() {
    return (
      
        <div className="calc-app">
       
        <div className="container">
          <div className="display">
             {!this.props.num2 ? this.props.value : this.props.num2} 
            <span className="cursor" />
          </div>
          <div className="keypad">
          <button className="backspace" onClick={() => this.props.dispatch({ type: 'AC'})}>AC</button>
          <button className="clear " onClick={() => this.props.dispatch({ type: 'C'})}>C</button>
          <button className="btn" onClick={() => this.props.dispatch({ type: 'TWO', payload: '*'})}>*</button>
          <button className="btn" onClick={() => this.props.dispatch({ type: 'ONE', payload: '7'})}>7</button>
          <button className="btn" onClick={() => this.props.dispatch({ type: 'ONE', payload: '8'})}>8</button>
          <button className="btn" onClick={() => this.props.dispatch({ type: 'ONE', payload: '9'})}>9</button>
          <button className="btn" onClick={() => this.props.dispatch({ type: 'TWO', payload: '/'})}>/</button>
          <button className="btn" onClick={() => this.props.dispatch({ type: 'ONE', payload: '4'})}>4</button>
          <button className="btn" onClick={() => this.props.dispatch({ type: 'ONE', payload: '5'})}>5</button>
          <button className="btn" onClick={() => this.props.dispatch({ type: 'ONE', payload: '6'})}>6</button>
          <button className="btn" onClick={() => this.props.dispatch({ type: 'TWO', payload: '+'})}>+</button>
          <button className="btn" onClick={() => this.props.dispatch({ type: 'ONE', payload: '1'})}>1</button>
          <button className="btn" onClick={() => this.props.dispatch({ type: 'ONE', payload: '2'})}>2</button>
          <button className="btn" onClick={() => this.props.dispatch({ type: 'ONE', payload: '3'})}>3</button>
          <button className="btn" onClick={() => this.props.dispatch({ type: 'TWO', payload: '-'})}>-</button>
          <button className="btn zero" onClick={() => this.props.dispatch({ type: 'ONE', payload: '0'})}>0</button>
          <button className="btn" onClick={() => this.props.dispatch({ type: 'ONE', payload: '.'})}>.</button>
          <button className="result" onClick={() => this.props.dispatch({ type: 'RES'})}>=</button>
          </div>
          </div>
        </div>
        
      
    )
  }
}

function mapStateToProps(state) {
  return {
    value:state.value,
    op: state.op,
    num1: state.num1,
    num2: state.num2,
    num3: state.num3
  };
}


export default connect(mapStateToProps)(Counter);
