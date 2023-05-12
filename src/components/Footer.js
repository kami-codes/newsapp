import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div className= {`container-fluid py-4 text-center text-bg-${this.props.theme}`}>
        Code-by-Dev
      </div>
    )
  }
}

export default Footer
