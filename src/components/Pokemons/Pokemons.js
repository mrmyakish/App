import React from 'react';
import styles from './Pokemons.css';
import { browserHistory, Router, Route, Link } from 'react-router'

class pokemon extends React.Component {
  componentWillMount() {
    this.props.loaddirectories()
  }
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.pokemonlist.map(({name, url}, key) => (
          <div key={`pokemonlist-element-${key}`}>  <Link to={{ pathname: '/pika', query: {url: url}}}>{name}</Link> </div>
        ))}
      </div>
    )
  }
}

export default pokemon
