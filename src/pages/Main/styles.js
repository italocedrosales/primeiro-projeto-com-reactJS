import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 50px;
  color: ${props => (props.error ? 'red' : '#7159c1')};
  font-family: Arial, Helvetica, sans-serif;

  small {
    font-size: 20px;
    color: blue;
  }
`;
