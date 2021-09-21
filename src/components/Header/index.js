import React from 'react';
import { Link } from "gatsby";
//styles
import { Wrapper, Content } from './Header.styles'

const Header = () => {

  return (
    <Wrapper>
      <Content>
        <Link to={'/'}>
          Home
        </Link>
        <Link to={'/About'}>
          About
        </Link>
      </Content>
    </Wrapper>
  )
}

export default Header
