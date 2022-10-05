import React from 'react';
import { useQuery, gql } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Back from './Back';
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';

var GET_LAUNCHES = gql`
  query launch($id: ID!) {
        launch(id: $id) {
          id
          details
          launch_date_local
          launch_year
          mission_name
          mission_id
          rocket {
            rocket_name
            rocket_type
          }
          launch_site {
            site_name
          }
          launch_success
        }
  }`;



export default function launch() {

  let { id } = useParams();
  const { loading, error, data } = useQuery(GET_LAUNCHES, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (

    <>
      <Container className='mt-5'>
        <Row>
          <Col lg={6}>
            <Back />
          </Col>
        </Row>
        <Row className='mt-5'>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
            <Card.Body>
              <Card.Title className="text-center mt-4 mb-4">{data.launch.mission_name}</Card.Title>

              <Card.Text>
                {data.launch.details}
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <ListGroup>
                <ListGroup.Item>Launch year : {data.launch.launch_year}</ListGroup.Item>
                <ListGroup.Item>Rockets : {data.launch.rocket.rocket_name}</ListGroup.Item>
                <ListGroup.Item>Launch site : {data.launch.launch_site.site_name}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );


}

