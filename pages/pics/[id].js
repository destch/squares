import React from 'react'
import { Container, Breadcrumb, BreadcrumbItem, Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap'

import Link from 'next/link'
import { useRouter } from "next/router";

import Picture from '../../components/Picture'
import RecordTabs from '../../components/RecordTabs'
import text from '../../public/txt/test.json'

const Pic =  ({pic}) => {
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
                        <div className="product">
                            <div className="product-image mb-md-3">

                                        <img className="img-fluid" src={pic.uri}  />

                            </div>
                        </div>
                        <div dangerouslySetInnerHTML={ {__html: pic.caption} } />
                    </Container>
                </section>
        </React.Fragment>
    )
};


export async function getServerSideProps(context) {
    const res = await fetch(`http://picsapi.destch.com/pic?name=${context.params.id}`)
    const data = await res.json()
    const pic = data.results[0]
    if (!pic) {
        return {
            notFound: true,
        }
    }
    return {
        props: { pic }
    }
}


export default Pic;
