import React, { Component } from "react";
import { ButtonGroup } from "react-bootstrap";

class Students extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addModal: false,
      students: [
        {
          id: 1,
          firstName: "John",
          lastName: "doe",
          group: "React N32",
          doesWork: false,
        },
        {
          id: 2,
          firstName: "Tom",
          lastName: "Smith",
          group: "React N45",
          doesWork: true,
        },
        {
          id: 3,
          firstName: "Onfyor",
          lastName: "Jahseh",
          group: "React N50",
          doesWork: false,
        },
      ],
    };
  }

  closeAddModal = () => this.setState({ addModal: false });
  openAddModal = () => this.setState({ addModal: true });

  render() {
    const { students, addModal } = this.state;
    const { closeAddModal, openAddModal } = this;
    return (
      <div className="container py-3">
        <div>
          <ButtonGroup className="w-100">
            <input
              type="text"
              placeholder="search"
              className="form-control p-2 "
            />
            <select name="filter" id="filter" className="form-select w-auto">
              <option value="All">All</option>
              <option value="React N32">React N32</option>
              <option value="React N45">React N45</option>
              <option value="React N50">React N50</option>
              <option value="React N58">React N58</option>
            </select>
            <button className="btn btn-outline-success" onClick={openAddModal}>
              Add
            </button>
          </ButtonGroup>
        </div>
        <StudentList students={students} />

        <Modal show={addModal} onHide={closeAddModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeAddModal}>
              Close
            </Button>
            <Button variant="primary" onClick={closeAddModal}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Students;
