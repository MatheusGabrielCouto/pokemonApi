import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom'

class Pokemon extends React.Component {

  constructor() {
    super();

    this.state = {
      pokemon: [],
      pokemonImage: "",
      pokemonTypes: ""
    }
  }

  async componentDidMount() {
    const api = Axios.create({
      baseURL: localStorage.getItem('url')
    })

    const response = await api.get('')
    const responseImage = response.data.sprites.front_default;
    const responseTypes = response.data.types

    this.setState({
      pokemon: response.data,
      pokemonImage: responseImage,
      pokemonTypes: responseTypes
    })
  }

  render() {
    const {pokemon, pokemonImage, pokemonTypes} = this.state;
    return (
      <>
      <section className="pokemonPage">
        <img src={pokemonImage} alt=""/>
        <p className="titleBox">Nome: <strong>{pokemon.name}</strong></p>
        <div className="pokemonTypes">
          <h3>{pokemonTypes.length > 1 ? `Tipos` : `Tipo`} do pokemon</h3>
          <div className="types">
          {pokemonTypes && pokemonTypes.map(type => <p>{type.type.name}</p>)}
          </div>
        </div>
      <Link to="/">Voltar</Link>
      </section>
      </>
    );
  }
}

export default Pokemon;


/*
[
  {},
  {}
]
*/
