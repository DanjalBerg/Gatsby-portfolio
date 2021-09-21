import styled from 'styled-components';

export const Wrapper = styled.div`
  background: hsl(0, 0%, 95%);
`

export const Content = styled.div`

  .tick text {
    font-size: 0.5em;
    font-family: sans-serif;
    fill: hsl(27, 4%, 20%);
  }

  .marks .land {
    fill: hsl(143, 9%, 63%);
  }
  .marks .interiors {
    fill: none;
    stroke: hsl(158, 74%, 79%)
  }
  .marks .graticules {
    fill: none;
    stroke: hsla(0, 0%, 0%, 0.2);
  }

  .sphere {
    fill: hsl(214, 58%, 89%);
  }

  circle {
    fill: hsl(0, 61%, 35%);
    opacity: 0.3;
  }
  .tick line {
    stroke: hsla(0, 0%, 0%, 0.2);
  }
  .axis-label {
    font-size: 0.5em;
    fill: hsl(27, 4%, 20%);
  }


  .marks rect {
    fill: hsl(188, 40%, 40%);

`
