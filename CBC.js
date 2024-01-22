import React, { Component } from 'react'

export default class CBC extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
      <div>
        <p>iam a class based component {this.props.value}</p>
      </div>
    )
  }
}
