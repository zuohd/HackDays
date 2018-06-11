import React , { Component } from 'react';
import PropTypes from 'prop-types';
class Counter extends Component{
    constructor(props){
        super(props);
        //this.onClickIncrementButton=this.onClickIncrementButton.bind(this);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        this.state={
            count:props.initValue
        }
    }
    onClickDecrementButton(){
        this.updateCount(false);
    }
    onClickIncrementButton(){
        this.updateCount(true);
    }
    updateCount(IsInCrement){
        const previousCount=this.state.count;
        const newValue=IsInCrement?previousCount+1:previousCount-1;
        this.setState({count:newValue});
        this.props.onUpdate(newValue,previousCount);
    }

    render() {
        const {caption}=this.props;
        const buttonStyle = {
            margin: '10px'
          };
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count:{this.state.count}</span>
            </div>
        );
    }    
  
}
Counter.propTypes={
    caption:PropTypes.string.isRequired,
    initValue:PropTypes.number,
    onUpdate:PropTypes.func
};

Counter.defaultProps={
    initValue:0,
    onUpdate:f=>f
};
export default Counter;