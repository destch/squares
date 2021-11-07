import React from 'react'
import Link from 'next/link'

import { Col } from 'reactstrap'



const CardPost = ({ post, category }) => {

    return (
        <Col lg="4" sm="6" className={`mb-5 ${category ? "" : ""}`}>
            <div><Link href={`/blog/${post.slug}`}><a className="d-block mb-4"><img className="img-fluid" src={post.img} alt="" /></a></Link>
                <h5 className="mb-2"><Link href={`/blog/${post.slug}`}><a className="text-dark" >{post.name}</a></Link></h5>
                <p className="text-gray-500 text-sm"><Link href={`/blog`}><a className="text-uppercase text-xs mr-2" >{post.category[0]}</a></Link>{post.date}</p>
            </div>
        </Col>
    )
};



export default CardPost;