import React, { Component, useState } from "react";
import _ from "lodash";
// import Modal from "react-modal";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

const fetch = require("node-fetch");

class MainList extends Component {
  state = {
    data: null,
    isLoaded: false,
    show: false,
    id: 0,
    title: "",
    body: "",
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((json) => this.setState({ data: json, isLoaded: true }));
  }
  handleModal(elem) {
    this.setState({
      show: !this.state.show,
      id: _.get(elem, "id"),
      title: _.get(elem, "title"),
      body: _.get(elem, "body"),
    });
  }

  printer = () => {
    if (this.state.isLoaded) {
      return (
        <div>
          {this.state.data.map((ell) => {
            return (
              <div className="card" key={_.get(ell, "id")}>
                <div className="card-body">
                  <h5 className="card-title">Id: {_.get(ell, "id")}</h5>
                  <h6 className="card-subtitle mb-2">
                    Title: {_.get(ell, "title")}
                  </h6>
                  <p className="card-text">Body: {_.get(ell, "body")}</p>
                  <Button
                    onClick={() => this.handleModal(ell)}
                    // href="#"
                    // className="btn btn-primary"
                    // data-toggle="modal"
                    // data-target="#exampleModal"
                  >
                    Modal
                  </Button>
                  <Modal
                    show={this.state.show}
                    onHide={() => this.handleModal()}
                    animation={false}
                    centered
                    size="lg"
                  >
                    <Modal.Header closeButton>
                      {" "}
                      <Modal.Title>Id: {this.state.id}</Modal.Title>
                    </Modal.Header>
                    <Modal.Header>Title: {this.state.title}</Modal.Header>
                    <Modal.Body>Body: {this.state.body}</Modal.Body>
                    <Modal.Footer>
                      <Button
                        onClick={() =>
                          this.setState({ show: !this.state.show })
                        }
                      >
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <h1>Not loaded yet</h1>;
    }
  };
  render() {
    return (
      <div>
        <h1 className="display-1">List Items:</h1>
        {this.printer()}
      </div>
    );
  }
}

export default MainList;
