
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';





export default function Back() {

    const navigate = useNavigate();

    return (
      <>
        <Button width={'75px'} variant="primary" onClick={() => navigate(-1)}>go back</Button>
      </>
    );
}




