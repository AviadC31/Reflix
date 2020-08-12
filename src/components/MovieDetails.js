import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class MovieDetail extends Component {
  render() {
    const id = this.props.match.params.movieID

    return (
      <div >
        <h1>{this.props.movies[id].title+" ("+this.props.movies[id].year+")"}</h1>
        <img src={this.props.movies[id].img} className="details"/>
        <p>{this.props.movies[id].descrShort}</p>
        <Link to={"/catalog"} style={{'color':'black',
                                      'fontFamily': "'Lemonada', cursive",
                                      'font-size':'30px',
                                      'text-shadow': '1px -1px 0 #ecf0f1, 1px -1px 0 #ecf0f1, -1px 1px 0 #ecf0f1, 1px 1px 0 #ecf0f1'}}>Back</Link>
      </div>
           )
  }
}

export default MovieDetail;