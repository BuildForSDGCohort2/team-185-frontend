import React, { Component } from 'react'
import { Container } from 'reactstrap'

export class Footer extends Component {
    render() {
        return (
            <Container className="mt-5">
                <hr color="danger"></hr>
                <p>Copyright @ 2020 - Team 185 Inc. All Rights Reserved </p>
            </Container>
        )
    }
}

export default Footer
