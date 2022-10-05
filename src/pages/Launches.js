
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Dashboard from './Dashboard';
import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";

const GET_LAUNCHES = gql`
  query launches {
      launches {
        id
        launch_year
        mission_name
        launch_date_local
        rocket {
          rocket_name 
        }
      }
  }`;

const columns = [
  {
    name: '#Id',
    selector: row => row.id,
    sortable: true,
  },
  {
    name: 'Mission Name',
    selector: row => row.mission_name,
    sortable: true,
  },
  {
    name: 'Rocket Name',
    selector: row => row.rocket.rocket_name,
    sortable: true,
  },
  {
    name: 'Launch Year',
    selector: row => row.launch_year,
    sortable: true,
  },
  {
    name: 'Action',
    selector: row =>
      <>
        <Link to={`/launch/${row.id}`} key={row.id} >
          View
        </Link>
      </>,
    sortable: true,
  },

];

export default function Launches() {

  const { loading, error, data } = useQuery(GET_LAUNCHES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (

    <div>

      <Container className='mt-5'>
        <Dashboard />
        <Row className='mt-5'>
          <DataTable
            columns={columns}
            data={data.launches}
            pagination
          />
        </Row>
      </Container>
    </div>
  );
}


