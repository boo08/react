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

const GET_MISSIONS = gql`
  query mission($id:ID!) {
    mission(id: $id) {
      description
      id
      manufacturers
      name
      payloads {
        manufacturer
        nationality
        norad_id
        orbit
      }
      twitter
      website
      wikipedia
    }
  }`;


export default function Mission() {

  let { id } = useParams();

  const { loading, error, data } = useQuery(GET_MISSIONS, { variables: { id } });
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
              <Card.Title className="text-center mt-4 mb-4">{data.mission.name}</Card.Title>

              <Card.Text>
                {data.mission.description}
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <ListGroup>
                {data.mission.manufacturers !== "" && (
                  <>
                    <ListGroup.Item>manufacturers : {data.mission.manufacturers}</ListGroup.Item>
                  </>
                )}

              </ListGroup>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );

}

