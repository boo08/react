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

const GET_SHIP_QUERY = gql`
  query ship($id: ID!) {
    ship(id: $id) {
      home_port
    name
    roles
    type
    url
    image
    imo
    missions {
      name
    }
    mmsi
    model
    position {
      latitude
      longitude
    }
    speed_kn
    status
    }
  }`;

export default function Ship() {

  let { id } = useParams();
  const { loading, error, data } = useQuery(GET_SHIP_QUERY, { variables: { id } });

  if (loading) return <><p>Loading...</p></>;
  if (error) return <><p>Error :(</p></>;

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
            <Card.Img variant="top" width={'500px'} src={data.ship.image} />
            <Card.Body>
              <Card.Title className="text-center mt-4 mb-4">{data.ship.name}</Card.Title>

            </Card.Body>
            <Card.Body>
              <ListGroup>
              {data.ship.type !== "" && (
                  <>
                    <ListGroup.Item>type : {data.ship.type}</ListGroup.Item>
                  </>
                )}
                {data.ship.imo !== "" && (
                  <>
                    <ListGroup.Item>imo : {data.ship.imo}</ListGroup.Item>
                  </>
                )}
                      {data.ship.mmsi !== "" && (
                  <>
                    <ListGroup.Item>mmsi : {data.ship.mmsi}</ListGroup.Item>
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


