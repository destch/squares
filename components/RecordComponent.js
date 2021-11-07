import React from 'react'
import { Badge } from 'reactstrap'
import Link from "next/link";
import { Container, Breadcrumb, BreadcrumbItem, Row, Col, Pagination, PaginationItem, PaginationLink, Spinner } from 'reactstrap'
import { isEqual } from 'lodash';

import {getRecords} from '../pages/api/items'
import CardProduct from '../components/CardProduct'
import { Form, InputGroup, Input } from "reactstrap";
import PageContext from './PageContext'
import PropTypes from 'prop-types';
import useSWR from 'swr'
import Loader from "react-loader-spinner";

const API_URL = 'http://54.242.168.77:8080/records/';

const fetcher = url =>  fetch(url).then(r => r.text()).then(body => body.length > 6 ? JSON.parse(body) : 'no results')

function RecordComponent(params) {
    var slug
    if (params.params.term == ""){
        slug = params.params.page
    } else {
        slug = params.params.term + '/' + "1"
    }

    const { data, error } = useSWR(API_URL + slug, fetcher)

    if (error) console.log(error);
    
    if (!data) {
      return(
        <Container className="my-4">
        <div className="d-flex justify-content-center">
        <Loader
        type="TailSpin"
        color="#000000"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
        </div>
        </Container>
      );
    };

    if (data == 'no results') {
        return (<Container className="my-4"><div className="d-flex justify-content-center"><h2>No Results</h2></div></Container>)
    };

    
    const records = data;

    return (
        <Row>
            {records.map((product, index) => 
                <Col key={index} xl={4} lg={4} md={4} xs={6}>
                    <CardProduct product={product}/>
                </Col>
            )}
        </Row>
    
    );
}   

export default RecordComponent;