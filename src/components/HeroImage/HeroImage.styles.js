import styled from 'styled-components';

export const Wrapper = styled.div`

  background-image: linear-gradient(
    to bottom,
    hsla(0, 0%, 0%, 0) 60%,
    hsla(0, 0%, 0%, 1) 100%
    ),
  linear-gradient(
    to left,
    hsla(0, 0%, 0%, 0) 90%,
    hsla(0, 0%, 0%, 1) 100%
    ),
  linear-gradient(
    to right,
    hsla(0, 0%, 0%, 0) 90%,
    hsla(0, 0%, 0%, 1) 100%
    ),
     url(${({ image }) => image});

  background-size: 100%, cover;
  background-position: center;
  height: 600px;
  position: relative;

  animation: animateHeroImage 1s;
  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const Content = styled.div`
  padding: 20px;
  margin: 0 auto;
  width: 80%;

  h1 {
    display: flex;
    align-items: center;
    z-index: 100;
    color: white;

    position: absolute;
    bottom: 0px;
    min-height: 100px;
  }
`
