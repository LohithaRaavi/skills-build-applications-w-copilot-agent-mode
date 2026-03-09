import React, { useEffect, useState } from 'react';
import { Table, Card } from 'react-bootstrap';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
  const endpoint = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api/activities/`
    : '/api/activities/';

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Activities endpoint:', endpoint);
        console.log('Fetched activities:', data);
        setActivities(data.results ? data.results : data);
      });
  }, [endpoint]);

  return (
    <Card>
      <Card.Header as="h2" className="heading">Activities</Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, idx) => (
              <tr key={idx}>
                <td>{activity.id}</td>
                <td>{activity.name}</td>
                <td>{activity.date}</td>
                <td>{activity.duration}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default Activities;
