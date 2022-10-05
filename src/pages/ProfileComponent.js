
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Dashboard from './Dashboard';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";

export default function ProfileComponent() {
    const { username } = useParams();

  return (

    <div>

      <Container className='mt-5'>
        <Dashboard />
        <Row className='mt-5'>
        <Card className="justify-content-center" >
            
            <Card.Body>This Pae work Available {username}.</Card.Body>
            <Card.Body>This Pae not Available.</Card.Body>
            <Card.Body>This Pae not Available.</Card.Body>
        </Card>
        </Row>
      </Container>
    </div>
  );
}


