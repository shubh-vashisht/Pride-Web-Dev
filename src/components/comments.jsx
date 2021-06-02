import React, { Component } from "react";
import _ from "lodash";
import { Modal, Button } from "react-bootstrap";
class Comments extends Component {
  state = {
    data: null,
    isLoaded: false,
    show: false,
    id: 0,
    email: "",
    title: "",
    body: "",
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/comments/")
      .then((response) => response.json())
      .then((json) => this.setState({ data: json, isLoaded: true }));
  }
  handleModal(elem) {
    this.setState({
      show: !this.state.show,
      id: _.get(elem, "id"),
      name: _.get(elem, "name"),
      email: _.get(elem, "email"),
      body: _.get(elem, "body"),
    });
  }
  printer = () => {
    if (this.state.isLoaded) {
      return (
        <div>
          {this.state.data.map((ell) => {
            return (
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Id: {_.get(ell, "id")}</h2>
                  <h4 className="card-subtitle mb-2">
                    Name: {_.get(ell, "name")}
                  </h4>
                  <h5 className="card-subtitle">
                    Email: {_.get(ell, "email")}
                  </h5>
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
                    <Modal.Header>Name: {this.state.name}</Modal.Header>
                    <Modal.Header>Email: {this.state.email}</Modal.Header>
                    <Modal.Body>Body: {this.state.body}</Modal.Body>
                    <Modal.Footer>
                      <Button onClick={() => this.handleModal(ell)}>
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
        <h1 className="display-1">Comments:</h1>
        {this.printer()}
      </div>
    );
  }
}

export default Comments;
