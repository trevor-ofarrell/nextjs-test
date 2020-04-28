import React, {Component} from 'react';
import { Button, Backdrop, AppBar, Box, Container } from "@material-ui/core";


export default function Globe() {

    return (
        <Container style={{ overflow: 'hidden', maxWidth: '100%' }}>
            <img id="background-video" src="Globe_gif2.gif" style={{ marginTop: '80px', paddingBottom: '40px' }}
            alt=" Your browser does not support the video tag."
            >
            </img>
        </Container>
    )
}