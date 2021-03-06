import React, { Component } from "react";
import { observer } from "mobx-react";
import { clone, getSnapshot, applySnapshot } from "mobx-state-tree";
import styled from "styled-components";
import PT from "prop-types";
import { colors, font_size } from "../../config/var";
import { Block } from "../block/Block";
import CommentHeader from "./CommentHeader";
import CommentsList from "./CommentsList";
import CommentEdit from "./CommentEdit";
import CommentFooter from "./CommentFooter";
import CommentReply from "./CommentReply";

export const SComment = styled(Block)`
  margin: 0.5em;
  margin-left: 0;
  margin-bottom: 1em;
  padding: 0.5em 1em;
`;
const Body = styled.div`
  p {
    font-family: "PT Mono";
    padding: 0;
    margin: 0;
    font-size: ${font_size.text};
    color: ${colors.dark_2};
  }
`;

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      reply: false
    };
    this.onToggleEdit = this.onToggleEdit.bind(this);
    this.renderEditable = this.renderEditable.bind(this);
    this.onCancelEdit = this.onCancelEdit.bind(this);
    this.onSaveEdit = this.onSaveEdit.bind(this);
    this.onToggleReply = this.onToggleReply.bind(this);
    this.onCancelReply = this.onCancelReply.bind(this);
  }

  onToggleEdit() {
    this.setState({ isEditing: true, clone: clone(this.props.item) });
  }

  onToggleReply() {
    this.setState({ reply: true });
  }

  onCancelReply() {
    this.setState({ reply: false });
  }

  onCancelEdit() {
    this.setState({ isEditing: false });
  }

  onSaveEdit() {
    if (this.state.clone.text) {
      applySnapshot(this.props.item, getSnapshot(this.state.clone));
      this.setState({
        isEditing: false,
        clone: null
      });
    } else {
      this.onCancelEdit();
    }
  }

  renderEditable() {
    return (
      <CommentEdit
        item={this.state.clone}
        onCancelEdit={this.onCancelEdit}
        onSaveEdit={this.onSaveEdit}
      />
    );
  }

  renderReply() {
    return <CommentReply />;
  }

  render() {
    return (
      <>
        {this.state.isEditing ? (
          this.renderEditable()
        ) : (
          <>
            <SComment>
              <CommentHeader is_add_form={false} item={this.props.item} />
              <Body>
                <p>{this.props.item.text}</p>
              </Body>
              <CommentFooter
                is_editable={false}
                item={this.props.item}
                onToggleEdit={this.onToggleEdit}
                onToggleReply={this.onToggleReply}
                onCancelReply={this.onCancelReply}
              />
            </SComment>
            {this.state.reply ? (
              <CommentReply
                item={this.props.item}
                close={() => this.setState({
                  reply: false
                })}
              />
            ) : null}
            {this.props.item.children ? (
              <CommentsList CommentsList={this.props.item} />
            ) : null}
          </>
        )}
      </>
    );
  }
}

export default observer(Comment);
