'use strict';

import React, {Component} from 'react';
import { Button, Backdrop, AppBar, Box, Container } from "@material-ui/core";


class Globe extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'Blue_mask_Globe_test.mp4'
        }
    }

    render () {
        return (
            <Container style={{ overflowY: 'hidden', maxWidth: '100%' }}>
                <video id="background-video" loop autoPlay style={{ width: '21em', minWidth: '1em'}}>
                    <source src={this.state.videoURL} type="video/mp4" />
                    <source src={this.state.videoURL} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
            </Container>
        )
    }
};

export default Globe;