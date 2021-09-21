import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  padding: 0 20px;
`

export const Content = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;

  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  max-width: 1200px;
  grid-gap: 3rem;


  .title-items {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: hsl(200, 25%, 50%);
    min-height: 100px;
    border-radius: 20px;
    box-shadow: 0.5rem .25rem .5rem rgb(0,0,0, 0.8);


  }
`
