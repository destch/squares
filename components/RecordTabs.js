import React from 'react'

import { Container, Row, Col, Nav, NavItem, Button, Table, Badge, NavLink, TabContent, TabPane, Media } from 'reactstrap'
import Link from 'next/link'
import ReactPlayer from 'react-player'

const ProductBottomTabs = ({product}) => {
    const [activeTab, setActiveTab] = React.useState(1)
    const toggleTab = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    const groupByN = (n, data) => {
        let result = [];
        for (let i = 0; i < data.length; i += n) result.push(data.slice(i, i + n));
        return result;
    }

    if (!product.images) {
        product.images = [{uri: 'https://image.flaticon.com/icons/png/512/107/107817.png'}]
    }

    const infolist = [{"name": "Release Date:" ,"text":product.released},
     {"name": "Label:" ,"text":product.labels[0].name},
      {"name": "Country:" ,"text":product.country}]

    if (product.genres) {
        var elem
        infolist.push({"name": "Genres:" ,"text":product.genres[0]})
        for (var i = 0; i < product.genres.slice(1).length; i++) {
            infolist[infolist.length - 1].text = infolist[infolist.length - 1].text.concat(', ' + product.genres.slice(1)[i])
        }

    }
    
    if (product.genres.styles) {
        var elem
        infolist.push({"name": "Styles:" ,"text":product.styles[0]})
        for (var i = 0; i < product.styles.slice(1).length; i++) {
            infolist[infolist.length - 1].text = infolist[infolist.length - 1].text.concat(', ' + product.styles.slice(1)[i])
        }
    }
    

    const groupedAdditionalInfo = groupByN(3, infolist)

    const vidlist = []
    if (product.videos) {
        var elem
        for (var i = 0; i < product.videos.length; i++) {
            vidlist.push(product.videos[i].uri)
        }
    }

    return (
            <Container className="mt-4">
                <Nav tabs className="flex-column flex-lg-row">
                    <NavItem>
                        <NavLink
                            className={`detail-nav-link ${activeTab === 1 ? 'active' : ''}`} onClick={() => toggleTab(1)} style={{ cursor: "pointer" }}>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={`detail-nav-link ${activeTab === 2 ? 'active' : ''}`} onClick={() => toggleTab(2)} style={{ cursor: "pointer" }}>Additional Information</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={`detail-nav-link ${activeTab === 3 ? 'active' : ''}`} onClick={() => toggleTab(3)} style={{ cursor: "pointer" }}>Videos</NavLink>
                    </NavItem>
                </Nav>
                <TabContent className="py-4" activeTab={activeTab}>
                    <TabPane className="px-3" tabId={1}>
                        <Row>
                            <Col>
                                <Table hover className="table-responsive-md">
                                    <thead className="bg-gray">
                                        <tr>
                                            <th className="py-3 pl-3 text-sm border-0">Side</th>
                                            <th className="py-3 text-sm border-0">Title</th>
                                            <th className="py-3 text-sm border-0">Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {product.tracklist.map((track, index) =>
                                            <tr>
                                                <th className="pl-3 py-4 align-middle">{ track.position }</th>
                                                <td className="py-4 align-middle"> { track.title } </td>
                                                <td className="py-4 align-middle"> { track.duration } </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </Table>
                            </Col>
                            <Col md="5">
                                <img className="img-fluid" src={product.images[0].uri} alt={product.title} />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId={2}>
                        <Row>
                            {groupedAdditionalInfo.map((infoBlock, index) =>
                                <Col key={index} md="6">
                                    <table className="table text-sm">
                                        <tbody>
                                            {infoBlock.map((info, index) =>
                                                <tr key={index}>
                                                    <th className="font-weight-normal border-0">{info.name}</th>
                                                    <td className="text-muted border-0">{info.text}</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </Col>
                            )}
                        </Row>
                    </TabPane>
                    <TabPane tabId={3}>
                        <Row className="mb-5">
                            <Col>
                              <ReactPlayer url={vidlist}
                                config={{
                                        youtube: {
                                          playerVars: { controls: 1 }
                                        }
                                      }}
                               />
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </Container>
       
    )
};

export default ProductBottomTabs;