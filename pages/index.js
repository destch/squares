import React from 'react'
import { Container, Breadcrumb, BreadcrumbItem, Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import Link from 'next/link'
import Picture from '../components/Picture'
import path from 'path'


function Pics({ pics }) {
return (

        <React.Fragment>
                <Container>
                    <Breadcrumb className="pl-0">
                        <BreadcrumbItem active>destch - Greenwood</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="hero-content">
                        <h1 className="hero-heading">pics</h1>
                    </div>
                </Container>
                <section className="py-2">
                    <Container>
                        <Row>
                            {pics.results.map((pic, index) =>
                                <Col key={index} xl={4} lg={4} md={4} xs={6}>
                                    <Picture pic={pic}/>
                                </Col>
                            )}
                        </Row>
                    </Container>
                </section>
        </React.Fragment>

    )
}


export async function getServerSideProps(context) {
    const res = await fetch('http://picsapi.destch.com/pics')
    const pics = await res.json()

    if (!pics) {
        return {
            notFound: true,
        }
    }

    return {
        props: { pics }
    }
}

export default Pics;
