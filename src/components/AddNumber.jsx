import React, {Component} from 'react';
import store from '../store'

export default class AddNumber extends Component {
  state = {size22:1}
  render() {
    return (
      <div>
        <h1>Add Number</h1>

        <input type="button" value="+" onClick={function() {
          store.dispatch({type:'INCREMENT', size11:this.state.size22})
        }.bind(this)}></input>

        <input type="text" value={this.state.size22} onChange={function(e) {
          this.setState({size22:Number(e.target.value)})
        }.bind(this)}></input>
      </div>
    )
  }
}
