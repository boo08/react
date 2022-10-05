
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Dashboard from './Dashboard';
import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";

const GET_ROCKETS = gql`
  query rockets {
    rockets {
        id
        country
        name
        type
        company
      }
  }`;

const columns = [
  {
    name: '#Id',
    selector: row => row.id,
    sortable: true,
  },
  {
    name: 'Name',
    selector: row => row.name,
    sortable: true,
  },
  {
    name: 'Country',
    selector: row => row.country,
    sortable: true,
  },
  {
    name: 'Company',
    selector: row => row.company,
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
        <Link to={`/rocket/${row.id}`} key={row.id} >
          View
        </Link>
      </>,
  },
];

export default function Rockets() {

  const { loading, error, data } = useQuery(GET_ROCKETS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (

    <div>

      <Container className='mt-5'>
        <Dashboard />
        <Row className='mt-5'>
          <DataTable
            columns={columns}
            data={data.rockets}
            pagination
          />
        </Row>
      </Container>
    </div>
  );
}


