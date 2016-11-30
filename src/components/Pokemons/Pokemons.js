import React from 'react';
import styles from './Pokemons.css';

class pokemon extends React.Component {
  componentWillMount() {
    this.props.loaddirectories()
  }
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.pokemonlist.map(({name, url}) => <div>{name},{url}</div>)}
      </div>
    )
  }
}

export default pokemon
