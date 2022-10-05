
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Dashboard from './Dashboard';
import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";

const GET_SHIP = gql`
  query ships {
    ships {
        id
        model
        name
        roles
        type
        image
      }
  }`;

const columns = [
  {
    name: '#Id',
    selector: row => row.id,
    sortable: true,
  },
  {
    name: 'Image',
    selector: row => <img src={row.image} alt="img" width={'75px'} />,
    
  },
  {
    name: 'Ship Name',
    selector: row => row.name,
    sortable: true,
  },
  {
    name: 'Roles',
    selector: row => row.roles,
    sortable: true,
  },
  {
    name: 'Type',
    selector: row => row.type,
    sortable: true,
  },
  {
    name: 'Action',
    selector: row =>
      <>
        <Link to={`/ship/${row.id}`} key={row.id} >
          View
        </Link>
      </>,
  },
];

export default function Ships() {

  const { loading, error, data } = useQuery(GET_SHIP);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (

    <div>

      <Container className='mt-5'>
        <Dashboard />
        <Row className='mt-5'>
          <DataTable
            columns={columns}
            data={data.ships}
            pagination
          />
        </Row>
      </Container>
    </div>
  );
}


