import AddNumber from '../components/AddNumber'
import {connect} from 'react-redux'

function mapReduxDispatchToReactProps(dispatch) {
  return {
    onClick:function(addNum) {
      dispatch({type:'INCREMENT', size:addNum})
    }
  }
}

export default connect(null, mapReduxDispatchToReactProps)(AddNumber)

/*
import AddNumber from '../components/AddNumber'
import React, {Component} from 'react'
import store from '../store'

export default class extends Component {
  
  render() {
    return (
      <AddNumber onClick={function(addNum) {
        store.dispatch({type:'INCREMENT', size:addNum})
      }
      }></AddNumber>
    )
  }
}
*/