import React from 'react'

import { Badge } from 'reactstrap'
import Link from "next/link";

const Picture = ({ pic, masonry }) => {
    if (!pic.uri) {
        pic.uri = 'https://image.flaticon.com/icons/png/512/107/107817.png'
    }
    return (
        <div className="product">
            <div className="product-image mb-md-3">
                <Link
                    href={{
                        pathname:`/pics/${pic.name}`,
                        query: {
                            uri: pic.uri
                        }
                    }} as={`/pics/${pic.name}`}>

                        <img className="img-fluid" src={pic.uri}  />
                </Link>
            </div>
        </div>
    )
};

export default Picture;
