import styled from "styled-components";

const TextInputs = styled.input`

  border: ${props=>props.error ? "1px solid #ff0000":"1px solid #efefef"};
  outline: none;
  padding: 0.25rem 0.5rem;
  background: transparent;
  font-size:0.9rem;
  font-family:Arial;
  color: #333;

  &:focus{
    border: 1px solid skyblue;
  }
`

export default TextInputs;