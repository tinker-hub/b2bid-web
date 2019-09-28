import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { ListingItem } from '../components/ListingItem';
import { unitsCollection } from '../utils/firebase-collections/units.collection';

const useStyles = makeStyles(theme => ({
  paperContainer: {
    padding: '20px',
  },
  formControl: {
    width: '100%',
    marginTop: '10px',
    minWidth: 120,
  },
}));

export const ProjectDetails = () => {
  const styles = useStyles();
  const [values, setValues] = React.useState({
    age: '',
    name: 'hai',
    listingsData: [],
  });

  const [listingsData, setListingsData] = React.useState([]);

  useEffect(() => {
    getUnits();
  }, listingsData);

  const getUnits = async () => {
    const res = await unitsCollection.getAll();
    console.log(res);
    setListingsData(res);
  };

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper className={styles.paperContainer}>
            <Typography variant="h6" component="h2">
              Filter By:
            </Typography>
            <FormControl className={styles.formControl}>
              <InputLabel htmlFor="age-simple">Location</InputLabel>
              <Select
                value={values.age}
                onChange={handleChange}
                inputProps={{
                  name: 'age',
                  id: 'age-simple',
                }}
              >
                <MenuItem value={10}>All Locations</MenuItem>
                <MenuItem value={20}>Metro Manila</MenuItem>
                <MenuItem value={30}>Quezon City</MenuItem>
              </Select>
            </FormControl>
          </Paper>
        </Grid>
        <Grid
          item
          container
          xs={9}
          spacing={2}
          className={styles.listContainer}
        >
          {listingsData.map((value, index) => {
            return (
              <ListingItem
                key={index}
                name={value.name}
                investors={value.investors != null ? value.investors.length : 0}
                type={value.type}
                location={value.location}
                imageUrl={value.photosUrls[0]}
                numberOfBed={value.numberOfBed}
                numberOfRestroom={value.numberOfRestroom}
                numberOfCarPark={value.numberOfCarPark}
                price={value.unitPrice}
              />
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
};
