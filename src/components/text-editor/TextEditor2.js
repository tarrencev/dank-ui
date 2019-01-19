import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Editor, { createEditorStateWithText } from "draft-js-plugins-editor";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import createToolbarPlugin from "draft-js-static-toolbar-plugin";
import createMarkdownShortcutsPlugin from "draft-js-markdown-shortcuts-plugin";
import { convertToRaw } from "draft-js";
import { Input as SmoothInput } from "smooth-ui";
import { stateToMarkdown } from "draft-js-export-markdown";

import "draft-js/dist/Draft.css";

import Input from "../input/Input";

const StyledToolbar = styled.div`
  margin: -0.375rem -0.75rem;
  margin-bottom: 0.375rem;

  .toolbar {
    background: #f7f7f7;
    border-radius: 0.25rem;
    display: flex;
  }

  .toolbar-button {
    background: none;
    border: none;
    padding: 5px 8px;
    cursor: pointer;

    &:hover,
    &:focus {
      background: #b3b3b3;
      outline: 0; /* reset for :focus */
    }

    .active {
      color: #6a9cc9;
    }

    .active svg {
      fill: #6a9cc9;
    }

    svg {
      height: 20px;
      width: 20px;
    }
  }
`;

const StyledTextEditor = styled(SmoothInput.withComponent("div"))`
  display: block;
  width: 100%;

  &.sui-is-valid {
    border-color: #28a745;
  }

  .public-DraftEditorPlaceholder-root {
    color: #6b747d;
  }

  &:focus-within {
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
  }
`;

export default class TextEditor extends Component {
  constructor(props) {
    super(props);

    this.toolbarPlugin = createToolbarPlugin({
      theme: {
        toolbarStyles: {
          toolbar: "toolbar"
        },
        buttonStyles: {
          button: "toolbar-button",
          buttonWrapper: "toolbar-button-wrapper"
        }
      }
    });

    this.state = {
      editorState: createEditorStateWithText("")
    };
  }

  render() {
    const { editorState } = this.state;
    const {
      className = "",
      input,
      meta: { valid },
      ...rest
    } = this.props;
    return (
      <StyledTextEditor
        className={`${valid ? "sui-is-valid" : ""} ${className}`}
      >
        <StyledToolbar>
          <this.toolbarPlugin.Toolbar />
        </StyledToolbar>
        <Editor
          className="editor"
          {...input}
          {...rest}
          editorState={editorState}
          onChange={editorState => {
            this.setState({ editorState }, () =>
              input.onChange(stateToMarkdown(editorState.getCurrentContent()))
            );
          }}
          plugins={[this.toolbarPlugin]}
        />
      </StyledTextEditor>
    );
  }
}
