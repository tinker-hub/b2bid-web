import React, { useEffect } from 'react';
import { withRouter } from 'react-router';

import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useTheme,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { ListingItem } from '../components/ListingItem';
import { unitsCollection } from '../utils/firebase-collections/units.collection';
import { Layout } from '../components/Layout';
import { PageContainer } from '../components/PageContainer';
import { getUniqueLocations, filterLocation } from '../utils/helpers/tools';

const useStyles = makeStyles(theme => ({
  paperContainer: {
    padding: '20px',
    marginBottom: 20,
  },
  formControl: {
    width: '100%',
    marginTop: '10px',
    minWidth: 120,
  },
}));

const Listings = props => {
  const theme = useTheme();
  const styles = useStyles();
  const [values, setValues] = React.useState({
    filter: '',
    name: 'hai',
    listingsData: [],
  });

  const [listingsRaw, setListingsRaw] = React.useState([]);
  const [listingsData, setListingsData] = React.useState([]);
  const [filterData, setFilterData] = React.useState([]);

  useEffect(() => {
    getUnits();
  }, []);

  const getUnits = async () => {
    const res = await unitsCollection.getAll();
    console.log(res);
    setListingsData(res);
    setListingsRaw(res);
    setFilterData(getUniqueLocations(res));
  };

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
    console.log(filterLocation(listingsRaw, event.target.value));
    setListingsData(filterLocation(listingsRaw, event.target.value));
  };

  const handleOnListingClick = id => {
    const listId = id;
    props.history.push(`/listings/${listId}`);
  };

  return (
    <Layout>
      <PageContainer style={{ spacing: theme.spacing(3) }}>
        <Container>
          <Paper className={styles.paperContainer}>
            <Typography variant="h6" component="h2">
              Filter By:
            </Typography>
            <FormControl className={styles.formControl}>
              <InputLabel htmlFor="age-simple">Location</InputLabel>
              <Select
                value={values.filter}
                onChange={handleChange}
                inputProps={{
                  name: 'filter',
                  id: 'location-id',
                }}
              >
                <MenuItem value="all">All Locations</MenuItem>
                {filterData.map((value, index) => {
                  return (
                    <MenuItem value={value} key={index}>
                      {value}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Paper>
          <Grid container spacing={2}>
            <Grid item container spacing={2} className={styles.listContainer}>
              {listingsData.map((value, index) => {
                return (
                  <ListingItem
                    key={index}
                    id={value.id}
                    name={value.name}
                    investors={
                      value.investors != null ? value.investors.length : 0
                    }
                    lowestAvailablePrice={value.lowestAvailablePrice}
                    type={value.type}
                    location={value.location}
                    imageUrl={value.photosUrls[0]}
                    numberOfBed={value.numberOfBed}
                    numberOfRestroom={value.numberOfRestroom}
                    numberOfCarPark={value.numberOfCarPark}
                    price={value.unitPrice}
                    onClick={handleOnListingClick}
                  />
                );
              })}
            </Grid>
          </Grid>
        </Container>
      </PageContainer>
    </Layout>
  );
};

export default withRouter(Listings);
