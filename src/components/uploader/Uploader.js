import React, { Component } from "react";
import styled from "@emotion/styled";

import Button from "../button/Button";
import Dropzone from "react-dropzone";

const Container = styled.section`
  border: 1px solid #e8e8e8;
  border-radius: 0.25em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const DropArea = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Thumb = styled.img`
  width: 100px;
`;

export default class Uploader extends Component {
  constructor() {
    super();
    this.state = {
      files: []
    };
  }

  onDrop(files) {
    this.setState(
      {
        files: files.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      },
      () => {
        const { input } = this.props;
        input.onChange(files);
      }
    );
  }

  componentWillUnmount() {
    // Make sure to revoke the data uris to avoid memory leaks
    this.state.files.forEach(file => URL.revokeObjectURL(file.preview));
  }

  render() {
    const { files } = this.state;

    const thumbs = files.map(file => (
      <div key={file.name}>
        <Thumb src={file.preview} />
      </div>
    ));

    return (
      <Container>
        <Dropzone accept="image/*" onDrop={this.onDrop.bind(this)}>
          {({ getRootProps, getInputProps, isDragActive }) => (
            <DropArea
              {...getRootProps()}
              className={`dropzone ${isDragActive ? "dropzone--isActive" : ""}`}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop files here...</p>
              ) : (
                <EmptyState>
                  <Button>Upload Files</Button>
                </EmptyState>
              )}
            </DropArea>
          )}
        </Dropzone>
        <aside>{thumbs}</aside>
      </Container>
    );
  }
}
