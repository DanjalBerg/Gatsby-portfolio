import styled from 'styled-components';

export const Wrapper = styled.div`
  background: hsl(0, 0%, 90%);
`

export const Content = styled.div`

  #lines {
    fill: none;
    stroke: hsl(0, 0%, 50%);
    stroke-width: 2px;
  }

  line.marker-line {
    stroke: black;
    stroke-width: 2px;
  }

  text.Ymarker-text {
    font-size: 1.5em;
    text-anchor: end;
  }

  text.Xmarker-text {
    font-size: 1em;
    text-anchor: start;
  }

  #XAxis .domain {
    display: none;
  }
  .tick line {
    stroke: hsl(0, 0%, 70%);
  }

  #XAxis .tick text {
    font-size: 1.5em;
    transform: rotate(-15deg);
  }

  #YAxis .tick text {
    font-size: 1.5em;
  }

  #PlotTitle {
    transform: translate(200px, -5px);
    font-size: 1.5em;
  }

  #XLabel {
    transform: translate(300px, 460px);
    font-size: 1.5em;
  }

  #YLabel {
    transform:  translate(-100px, 230px) rotate(-90deg);
    text-anchor: middle;
    font-size: 1.5em;
  }

  .voronoi path {
    fill: none;
    pointer-events: all;
  }

  #Active-line {
    fill: none;
    stroke: black;
    stroke-width: 5px;
  }

  #Tooltip-stroke {
    font-size: 16px;
    text-anchor: end;
    font-weight: bold;
    stroke: white;
    stroke-width: 4px;
  }

  #Tooltip {
    font-size: 16px;
    text-anchor: end;
    font-weight: bold;
  }


`
//stroke: pink;
//stroke-width: 0.5px;
