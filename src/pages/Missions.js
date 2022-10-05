
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Dashboard from './Dashboard';
import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";

const GET_MISSIONS = gql`
  query missions {
    missions {
        id
        manufacturers
        name
        description
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
    name: 'Description',
    selector: row => row.description.substring(0, 150),
    sortable: true,
  },
  {
    name: 'manufacturers',
    selector: row => row.manufacturers,
    sortable: true,
  },
  {
    name: 'Action',
    selector: row =>
      <>
        <Link to={`/mission/${row.id}`} key={row.id} >
          View
        </Link>
      </>,
  },

];

export default function Missions() {

  const { loading, error, data } = useQuery(GET_MISSIONS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (

    <div>

      <Container className='mt-5'>
        <Dashboard />
        <Row className='mt-5'>
          <DataTable
            columns={columns}
            data={data.missions}
            pagination
          />
        </Row>
      </Container>
    </div>
  );
}


