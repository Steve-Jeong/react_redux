import React, {Component} from 'react';

export default class AddNumber extends Component {
  state = {addNum:1}
  render() {
    return (
      <div>
        <h1>Add Number</h1>

        <input type="button" value="+" onClick={function(){
          this.props.onClick(this.state.addNum)
        }.bind(this)}></input>

        <input type="text" value={this.state.addNum} onChange={function(e) {
          this.setState({addNum:Number(e.target.value)})
        }.bind(this)}></input>
      </div>
    )
  }
}
