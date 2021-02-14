import React from 'react';
import { Link } from 'react-router-dom';

import { PokemonImage } from '../Components';
import api from '../api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemons: [],
      name: '',
      pokemonsFiltrados: []
    }

    this.selectPokemon = this.selectPokemon.bind(this)
  }

  async componentDidMount() {
    const response = await api.get('');

    this.setState({
      pokemons: response.data.results
    })

  }

  selectPokemon({target}) {
    const {value} = target;

    this.setState({
      name: value,
    });
    
  }

  render() {

    const { pokemons, name } = this.state;
    const pokemonsFiltrados = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(name.toLocaleLowerCase()))

    return (
      <div className="container">
        <h1 className="title">Pokemons</h1>
        <input type="text" onChange={this.selectPokemon}/>
        <div className="pokemons-container">
        {pokemonsFiltrados.map((pokemon, key) => {
          return (
            <Link to={`/pokemon/${key+1}`} onClick={()=> localStorage.setItem('url', pokemon.url)} className="pokemons">
            <PokemonImage url={pokemon.url} />
            <p>{pokemon.name}</p>
            </Link>
          )
        })}
        </div>
      </div>
    );
  }
}

export default Home;
