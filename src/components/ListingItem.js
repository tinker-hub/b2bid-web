import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import HotelIcon from '@material-ui/icons/Hotel';
import BathtubIcon from '@material-ui/icons/Bathtub';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  dataContainer: {
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column',
  },
  percentText: {
    fontSize: '21px',
  },
  button: {
    marginTop: '10px',
    width: '100%',
    padding: '10px',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  typeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
}));

export const ListingItem = props => {
  const classes = useStyles();

  const theme = useTheme();

  return (
    <Grid item xs={4}>
      <Card className={classes.card}>
        <CardHeader
          title={props.name}
          subheader={
            <Typography style={{ color: theme.palette.primary.contrastText }}>
              {props.location}
            </Typography>
          }
          style={{ color: '#fff', background: theme.palette.primary.main }}
        />
        <CardMedia className={classes.media} image={props.imageUrl} />
        <Grid container style={{ background: '#EEEEEE', padding: '8px 15px' }}>
          <Grid item container xs={9} spacing={2}>
            <Grid item xs={4}>
              <Box className={classes.iconContainer}>
                <Typography variant="subtitle2" component="p">
                  {props.numberOfBed}
                </Typography>
                <HotelIcon color="secondary" />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box className={classes.iconContainer}>
                <Typography variant="subtitle2" component="p">
                  {props.numberOfRestroom}
                </Typography>
                <BathtubIcon color="secondary" />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box className={classes.iconContainer}>
                <Typography variant="subtitle2" component="p">
                  {props.numberOfCarPark}
                </Typography>
                <DriveEtaIcon color="secondary" />
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={3} className={classes.typeContainer}>
            <Typography variant="body2" component="p">
              {props.type}
            </Typography>
          </Grid>
        </Grid>
        <CardContent>
          <Grid container>
            <Grid item xs={6} className={classes.dataContainer}>
              <Typography variant="body2" component="p">
                Lowest Available Block Price
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                className={classes.percentText}
              >
                0.00%
              </Typography>
            </Grid>
            <Grid item xs={6} className={classes.dataContainer}>
              <Typography variant="body2" component="p">
                Investors
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                className={classes.percentText}
              >
                {props.investors}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} className={classes.dataContainer}>
              <Typography variant="body2" component="p">
                Unit Price
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                className={classes.percentText}
              >
                ${props.price}
              </Typography>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            VIEW PROPERTY
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};
