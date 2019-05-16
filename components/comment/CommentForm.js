import React, { Component } from "react";
import styled from "styled-components";
import { font_size } from "../../config/var";
import Emoji from "../emoji/Emoji";
import { TextareaForm } from "../form";

const STextarea = styled(TextareaForm)`
  width: 100%;
`;
const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5em 0;
  a {
    margin-left: 0.5em;
    font-weight: 700;
    font-size: ${font_size.text_sm};
    font-family: "Roboto", sans-serif;
  }
`;

export default class CommentForm extends Component {
  render() {
    return (
      <>
        <STextarea placeholder="Leave your comment here..." />
        <Footer>
          <a>
            Cancel<Emoji size={font_size.text_sm}>🙅🏼</Emoji>
          </a>
          <a>
            Submit<Emoji size={font_size.text_sm}>📝</Emoji>
          </a>
        </Footer>
      </>
    );
  }
}