import React from 'react';
import axios from 'axios';

class PokemonImage extends React.Component {

  constructor() {
    super();

    this.state = {
      pokemonsImage: '',
      pokemonsResp: ''
    }
  }

  async componentDidMount() {
    this.mountImage()
  }

  async mountImage() {
    const {url} = this.props
    const api = axios.create({
      baseURL: url
    })
    const response = await api.get('')
    const responseImage = response.data.sprites.front_default

    this.setState({
      pokemonsImage: responseImage
    })
  }

  componentDidUpdate() {
    this.mountImage()  
  }

  render() {
    const {pokemonsImage} = this.state

    return (
      <img src={pokemonsImage} alt=""/> 
    );
  }
}

export default PokemonImage;
