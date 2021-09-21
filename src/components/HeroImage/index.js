import React from 'react';


//styles
import { Wrapper, Content } from './HeroImage.styles'

const HeroImage = ({image}) => {

  return (
    <Wrapper image={image}>
      <Content>
        <h1>Danjal's Portfolio</h1>
      </Content>
    </Wrapper>
  )
}

export default HeroImage
