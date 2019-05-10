import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../../config/var";

class Button extends Component {
  render() {
    const Btn = styled.button`
      font-family: "Roboto";
      font-size: 15px;
      font-weight: 600;
      text-transform: uppercase;
      color: ${colors.dark_1};
      padding: 0.1em 0.8em;
      background: white;
      border: none;
      border: 3px solid ${colors.dark_1};
      border-radius: 3px;
      position: relative;
      box-shadow: 3px 3px 0px ${colors.dark_1};
      &::after {
        display: none;
        content: " ";
        z-index: -1;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 3px;
        background: repeating-linear-gradient(
          45deg,
          ${colors.dark_1},
          ${colors.dark_1} 4px,
          white 4px,
          white 8px
        );
        background-size: 500%;
        bottom: -7px;
        right: -7px;
        animation: shadow linear 25s;
        animation-iteration-count: infinite;
      }
      &:focus {
        outline: none;
      }
      &:hover {
        box-shadow: none;
        ::after {
          display: block;
        }
      }
    `;
    return <Btn {...this.props}>{this.props.children}</Btn>;
  }
}

export default Button;
