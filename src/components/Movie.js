import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

export class Movie extends Component {
  constructor() {
    super()
    this.state = {
    details: false
    }
  }
isDetails = () => {
this.setState({details: true})
}
 
rent = () =>{
  if(this.props.budget<=0) {
    alert("Out of money Dude")
    return
  }
  const that = this.props
  if(that.pay) that.pay(that.movie.cost)
  that.rent(that.movie.id)
}
  render() {
    return (
      <div>
          {this.state.details ? <Redirect to={"/movies/"+this.props.movie.id} /> : 
          <div id='button-container'>
            <img onClick={this.isDetails} src={this.props.movie.img} />
            <a onClick={this.rent}>{this.props.status}</a>
            <p>{this.props.cost}</p>
          </div>
          }
      </div >
    )
  }
}

export default Movie;