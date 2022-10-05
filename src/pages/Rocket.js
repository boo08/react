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

const GET_ROCKET = gql`
  query rocket($id:ID!) {
    rocket(id: $id) {
      id
      active
      boosters
      company
      cost_per_launch
      country
      description
      engines {
        engine_loss_max
        layout
        number
      }
      first_flight
    }
  }`;


export default function Rocket() {

        let { id } = useParams();
        const { loading, error, data } = useQuery(GET_ROCKET,{variables:{id}});
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
                  
                  <Card.Body>
                    <Card.Title className="text-center mt-4 mb-4">{data.rocket.id}</Card.Title>
      
                    <Card.Text>
                      {data.rocket.description}
                    </Card.Text>
                  </Card.Body>
                  <Card.Body>
                    <ListGroup>
                      {data.rocket.company !== "" && (
                        <>
                          <ListGroup.Item>company : {data.rocket.company}</ListGroup.Item>
                        </>
                      )}

                      {data.rocket.country !== "" && (
                        <>
                          <ListGroup.Item>country : {data.rocket.country}</ListGroup.Item>
                        </>
                      )}


{data.rocket.first_flight !== "" && (
                        <>
                          <ListGroup.Item>first flight : {data.rocket.first_flight}</ListGroup.Item>
                        </>
                      )}

{data.rocket.engines.layout !== "" && (
                        <>
                          <ListGroup.Item>Engine Layout : {data.rocket.engines.layout}</ListGroup.Item>
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


