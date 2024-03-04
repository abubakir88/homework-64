import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export class AddStudent extends Component {
  render() {
    const { addModal, closeAddModal } = this.props;
    return (
      <div>
        <Modal show={addModal} onHide={closeAddModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add students </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  FirstName
                </label>
                <input type="text" className="form-control" id="firstName" />
              </div>
              <div className="mb-3">
                <label htmlFor="lasttName" className="form-label">
                  LastName
                </label>
                <input type="text" className="form-control" id="LastName" />
              </div>
              <div className="mb-3">
                <select id="group" className="form-select">
                  <option value="React N32">React N32</option>
                  <option value="React N45">React N45</option>
                  <option value="React N50">React N50</option>
                  <option value="React N58">React N58</option>
                </select>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-inout"
                  id="doesWork"
                />
                <label htmlFor="lasttName" className="form-check-label">
                  Does work?
                </label>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeAddModal}>
              Cansel
            </Button>
            <Button variant="primary" onClick={closeAddModal}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddStudent;
