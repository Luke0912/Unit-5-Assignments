import styled from "styled-components";

export const Wrapper = styled.button`
  background-color: transparent;
  border: none;

  padding: 5px;
  outline: ${(props) => {
    if (props.dThree === true) {
      return "Dashed";
    } else if (props.dTwo === true) {
      return "solid";
    } else if (props.dFour === true) {
      return "none";
    }
    else if (props.dFive === true) {
      return "none";
    }
  }};
  text-align: center;
  background: ${(props) => {
    if (props.dOne === true) {
      return "#A85CF9";
    } else if (props.dTwo === false) {
      return "#A85CF9";
    } else if (props.dThree === false) {
      return "#A85CF9";
    } else if (props.dFour === false) {
      return "#A85CF9";
    } else if (props.dFive === false) {
      return "#A85CF9";
    }
  }};
  margin: 5px;
  color: ${(props) => {
    if (props.dFive === true) {
      return "blue";
    }
    else{
      return "black"
    } 
  }}
`;
