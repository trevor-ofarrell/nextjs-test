import { Grid, Typography } from "@material-ui/core";
import { withStyles, responsiveFontSizes } from "@material-ui/core/styles";
import { Button, Backdrop, AppBar, Box, Container } from "@material-ui/core";


const StyledBoxBlue = withStyles({
    root: {
      background: "#a4d8ef",
      width: "100%",
      minWidth: "100%",
      height: "5.5em",
      display: "block",
      textAlign: "center",
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "0px",
      color: "white",
      fontSize: "60px",
      fontFamily: "Arial, Helvetica, sans-serif",
    },
  })(Box);

  export default function footer() {

    return(

        <StyledBoxBlue>
            <Grid container spacing={10} style={{ textAlign: 'left', paddingRight: '50px', marginTop: '100px'}}>
                <Grid item xs={6}>
                    <Typography variant='h4' component='h2' style={{ fontWeight: 'bold', marginLeft: '50px' }}>
                        Wearible Charity
                    </Typography>
                    <br />
                    <Typography variant='h6' component='p' style={{marginLeft: '50px'}}>
                        Autonomous reserved instance
                        management
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={0} style={{ textAlign: 'left', paddingBottom: '50px' }}>
                        <Grid item xs={6} style={{ textAlign: 'center' }}>
                            <Typography variant='h6' component='p' style={{fontWeight: 'bold'}}>
                                Company
                            </Typography>
                            <Typography variant='h6' component='p' style={{fontWeight: 'bold'}}>
                                Shop
                            </Typography>
                            <Typography variant='h6' component='p' style={{fontWeight: 'bold'}}>
                                Statment
                            </Typography>
                            <Typography  variant='h6' component='p' style={{fontWeight: 'bold'}}>
                                Contact Us
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                        <Typography  variant='h6' component='p' style={{fontWeight: 'bold'}}>
                                Contact Us
                            </Typography>
                            <Typography variant='h6' component='p' style={{fontWeight: 'bold'}}>
                                +000 222 456-567
                            </Typography>
                            <Typography variant='h6' component='p' style={{fontWeight: 'bold'}}>
                                +000 222 456-567
                            </Typography>
                            <Typography variant='h6' component='p' style={{fontWeight: 'bold'}}>
                                Email: panichdiana@gmail.com
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                    <Grid container spacing={10} style={{ marginLeft: '50px', textAlign: 'left', borderTop: "1px solid #FFFFFF" }}>
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
                        <Grid item xs={3} style={{ textAlign: 'center' }}>
                            <Typography variant='h6' component='p' style={{ marginLeft: '-50px' }}>
                                Privacy Policy
                            </Typography>
                        </Grid>
                    </Grid>
            </Grid>
        </StyledBoxBlue>
    )

}