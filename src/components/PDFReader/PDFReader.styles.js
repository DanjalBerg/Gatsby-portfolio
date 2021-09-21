import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 20px auto;
  display: grid;
  place-items: center;
  position: relative;

`

export const Content = styled.div`
  box-shadow: 0 30px 40px 0 rgba(16, 36, 94, 0.6);
  border-radius: 20px;

  .buttonContainer {
    background: white;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 2%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.2;
    transition: opacity ease-in-out 0.5s;
    border-radius: 2em;
    box-shadow: 0px 0px 4px 2px rgba(16, 36, 94, 0.3);
  }

  input {
    width: 1.65em;
    border: none;
    font-size: 1em;
    text-align: end;
  }

  .buttonContainer:hover {
    opacity: 1;
  }

  button {
    width: 44px;
    height: 44px;
    background: white;
    cursor: pointer;
    font-size: 0.8em;
    border: 0;
    border-radius: 2em;
  }

  div.react-pdf__Page__annotations {
    display: none;
  }
`
