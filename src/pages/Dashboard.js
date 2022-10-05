
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";


const GET_DASH_DATA = gql`
  query dashbord {
    launches {
        id
      }
      missions {
        id
      }
      rockets {
        id
      }
      ships {
        id
      }
  }`;



export default function Dashboard() {

    const { loading, error, data } = useQuery(GET_DASH_DATA);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <>
            <Row>
                <h1 className="text-center mt-4 mb-4">Space X </h1>
            </Row>
            <Row>
                <Col md={3}>
                    <Card>
                        <Link to="/">
                            <Card.Body>
                                <Card.Title>Launches</Card.Title>
                                <Card.Text>
                                    {data.launches.length}
                                </Card.Text>

                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Link to="/missions">
                            <Card.Body>
                                <Card.Title>Missions</Card.Title>
                                <Card.Text>
                                    {data.missions.length}
                                </Card.Text>

                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Link to="/rockets">
                            <Card.Body>
                                <Card.Title>Rockets</Card.Title>
                                <Card.Text>
                                    {data.rockets.length}

                                </Card.Text>

                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Link to="/ships">
                            <Card.Body>
                                <Card.Title>Ships</Card.Title>
                                <Card.Text>
                                    {data.ships.length}
                                </Card.Text>

                            </Card.Body>
                        </Link>
                    </Card>
                </Col>

            </Row>
        </>
    );
}




