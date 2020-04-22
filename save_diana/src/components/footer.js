import { Grid, Typography } from "@material-ui/core";
import { withStyles, responsiveFontSizes } from "@material-ui/core/styles";
import { Button, Backdrop, AppBar, Box, Container } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedinIn
  } from "@fortawesome/free-brands-svg-icons";

const StyledBoxBlue = withStyles({
    root: {
      background: "#9dd8f4",
      maxWidth: "96%",
      height: "6.5em",
      display: "block",
      textAlign: "center",
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontSize: "60px",
      fontFamily: "Arial, Helvetica, sans-serif",
    },
  })(Container);

  export default function footer() {

    return(

        <StyledBoxBlue>
            <Grid container spacing={10} style={{ textAlign: 'left', marginTop: '2em'}}>
                <Grid item xs={6}>
                    <Typography variant='h4' component='h2' style={{ fontWeight: 'bold', marginLeft: '50px', paddingBottom: '30px'}}>
                        Wearible Charity
                    </Typography>
                    <Typography variant='h6' component='p' style={{marginLeft: '50px', paddingBottom: '20px'}}>
                        Autonomous reserved instance
                        management
                    </Typography>
                    <Container style={{marginLeft: '20px'}}>
                        <a>
                            <FontAwesomeIcon icon={faTwitter} size="1x" style={{marginRight: '20px'}}/>
                        </a>
                        <a>
                            <FontAwesomeIcon icon={faFacebook} size="1x" style={{marginRight: '20px'}}/>
                        </a>
                        <a>
                            <FontAwesomeIcon icon={faLinkedinIn} size="1x" style={{marginRight: '20px'}}/>
                        </a>
                        <a>
                            <FontAwesomeIcon icon={faInstagram} size="1x" style={{marginRight: '20px'}}/>
                        </a>
                    </Container>
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={0} style={{ textAlign: 'left', paddingBottom: '50px', paddingLeft: '100px', fontFamily: 'poppins' }}>
                        <Grid item xs={4} style={{ textAlign: 'left' }}>
                            <Typography variant='h6' component='p' style={{fontWeight: 'bold', paddingBottom: '15px'}}>
                                Company
                            </Typography>
                            <Typography variant='h6' component='p' style={{fontWeight: 'bold', paddingBottom: '15px'}}>
                                Shop
                            </Typography>
                            <Typography variant='h6' component='p' style={{fontWeight: 'bold', paddingBottom: '15px'}}>
                                Statment
                            </Typography>
                            <Typography  variant='h6' component='p' style={{fontWeight: 'bold'}}>
                                Contact Us
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                        <Typography  variant='h6' component='p' style={{fontWeight: 'bold', paddingBottom: '15px'}}>
                                Contact Us
                            </Typography>
                            <Typography variant='h6' component='p' style={{fontWeight: 'bold', paddingBottom: '15px'}}>
                                +000 222 456-567
                            </Typography>
                            <Typography variant='h6' component='p' style={{fontWeight: 'bold', paddingBottom: '15px'}}>
                                +000 222 456-567
                            </Typography>
                            <Typography variant='h6' component='p' style={{fontWeight: 'bold'}}>
                                Email: panichdiana@gmail.com
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                    <Grid container spacing={10} style={{ paddingLeft: '80px', textAlign: 'right', borderTop: "1px solid #FFFFFF" }}>
                        <Grid item xs={6} style={{ textAlign: 'left' }}>
                            <Typography variant='h6' component='p'>
                                @2020 All rights reserved.
                            </Typography>
                        </Grid>
                        <Grid item xs={3} style={{ textAlign: 'right' }}>
                            <Typography variant='h6' component='p' style={{ marginLeft: '-50px' }}>
                                Website terms
                            </Typography>
                        </Grid>
                        <Grid item xs={3} style={{ textAlign: 'left' }}>
                            <Typography variant='h6' component='p' style={{ marginLeft: '-50px' }}>
                                Privacy Policy
                            </Typography>
                        </Grid>
                    </Grid>
            </Grid>
        </StyledBoxBlue>
    )

}