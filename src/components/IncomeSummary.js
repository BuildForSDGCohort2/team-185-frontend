import React, { Component } from 'react'
import {Container, ListGroup, ListGroupItem, Button, Modal, Row, Col, Badge} from 'reactstrap';


export default class IncomeSummary extends Component {
    render() {
        return (
            <Container style={{ display: 'flex', marginTop: '1rem', marginBottom: '1rem', justifyContent:'center', alignItems:'center'}}>
                 <hr color="success"></hr>
                <Row>
                    <Col xs="6" sm="4"><h3><Badge color="success">{'Monthly : $$$'}</Badge></h3></Col>
                    <Col xs="6" sm="4"><h3><Badge color="success">{'Weekly : $$$'}</Badge></h3></Col>
                    <Col sm="4"><h3><Badge color="success">{'Today : $$$'}</Badge></h3></Col>
                </Row>   
                <hr color="success"></hr>
            </Container>
        )
    }
}
