import React, { useEffect, useState } from 'react';
import { Table, Card } from 'react-bootstrap';

const Users = () => {
  const [users, setUsers] = useState([]);
  const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
  const endpoint = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api/users/`
    : '/api/users/';

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Users endpoint:', endpoint);
        console.log('Fetched users:', data);
        setUsers(data.results ? data.results : data);
      });
  }, [endpoint]);

  return (
    <Card>
      <Card.Header as="h2" className="heading">Users</Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default Users;
