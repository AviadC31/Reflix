import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Movie from './Movie'
import '../styles/Catalog.css'

class Catalog extends Component {

  constructor() {
    super()
    this.state = {
      budget: 100
    }
  }

  pay = price => {
    this.setState({budget: this.state.budget - price})
  }

  render() {

    return (
      <div>
        <div id="u-input">
          <input type="text" placeholder="Ask and you shall receive" />
          <div id="button">Seek</div>
        </div>
        <h3 id="budget">Budget:{this.state.budget+'$'}</h3>
        <h1 id="home-title2">Rented</h1>
        <div className="home-container2">
          {this.props.state.movies.filter(f=>f.isRented).map(m => <Movie movie={m} rent={this.props.rent} status={'-'}/>)}
        </div>
        <h1 id="home-title2">Catalog</h1>
        <div className="home-container2">
          {this.props.state.movies.filter(f=>!f.isRented).map(m => <Movie movie={m} rent={this.props.rent}
                                              status={'+'} cost={m.cost+'$'} pay={this.pay} budget={this.state.budget}/>)}

        </div>
        <Link to={"/"} style={{'color':'black',
                                      'fontFamily': "'Lemonada', cursive",
                                      'font-size':'30px',
                                      'text-shadow': '1px -1px 0 #ecf0f1, 1px -1px 0 #ecf0f1, -1px 1px 0 #ecf0f1, 1px 1px 0 #ecf0f1'}}>Back</Link>
      </div>
    )
  }
}

export default Catalog 