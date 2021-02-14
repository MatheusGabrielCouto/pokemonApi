import React from 'react';

import { Link } from 'react-router-dom'

// import { Container } from './styles';

function Button(props) {
  const { to, value } = props

  return <Link to={`/${to}`}>{value}</Link>;
}

export default Button;