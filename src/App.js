import React, { useState } from "react";
import { Table, Container, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { data } from "./data.js";

function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <Container>
        <h1 className="text-center mt-4">Contact Keeper</h1>
        <Form>
          <InputGroup className="my-3">
            <Form.Control 
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search contacts" />
          </InputGroup>
        </Form>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
          {data
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.first_name.toLowerCase().includes(search);
              })
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;

// How to add bootstrap
// npm add bootstrap react-bootstrap
