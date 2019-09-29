import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';

import {
  Container,
  Grid,
  Box,
  Typography,
  useTheme,
  GridListTile,
  GridList,
  GridListTileBar,
  CardHeader,
  CardContent,
  Card,
  Button,
} from '@material-ui/core';
import {
  AttachMoney as AttachMoneyIcon,
  People as PeopleIcon,
  ChevronLeft as ChevronLeftIcon,
  Hotel as HotelIcon,
  Bathtub as BathtubIcon,
  DriveEta as DriveEtaIcon,
} from '@material-ui/icons';

import { PageContainer } from '../components/PageContainer';
import { Layout } from '../components/Layout';

import { unitsCollection } from '../utils/firebase-collections/units.collection';

import propertyImage1 from '../assets/images/property-image1.jpg';
import propertyImage2 from '../assets/images/property-image2.jpg';
import propertyImage3 from '../assets/images/property-image3.jpg';
import propertyImage4 from '../assets/images/property-image4.jpg';
import propertyImage5 from '../assets/images/property-image5.jpg';

export const ListingDetails = props => {
  const { history, match } = props;

  const { params } = match;
  const { listingId } = params;

  const [listingDetails, setListingDetails] = useState({});
  const [pageHasLoaded, setPageHasLoaded] = useState(false);

  console.log(listingDetails);

  useEffect(() => {
    const fetchListingDetailsData = async () => {
      const listingDetailsData = await unitsCollection.getById(+listingId);

      setListingDetails(listingDetailsData[0]);
      setPageHasLoaded(true);
    };

    fetchListingDetailsData();
  }, [listingId]);

  const {
    investors = [],
    unitPrice,
    name,
    numberOfRestroom,
    numberOfBed,
    numberOfCarPark,
    type,
    investmentCase = {},
    amenities = [],
    monthlyData = [],
  } = listingDetails;

  const propertyName = name;
  // TODO: Format this count 1,000
  const propertyInvestorsCount = investors.length;
  // TODO: Format - PHP 100.00
  const propertyUnitPrice = unitPrice;

  const propertyImagesData = [
    {
      id: 1,
      img: propertyImage1,
      title: 'Property Image 1',
    },
    {
      id: 2,
      img: propertyImage2,
      title: 'Property Image 2',
    },
    {
      id: 3,
      img: propertyImage3,
      title: 'Property Image 3',
    },
    {
      id: 4,
      img: propertyImage4,
      title: 'Property Image 4',
    },
    {
      id: 5,
      img: propertyImage5,
      title: 'Property Image 5',
    },
  ];

  const propertyInvestmentCaseOverview = investmentCase.overview;

  const propertyInvestmentCaseLocation = investmentCase.location;

  const propertyInvestmentCase = investmentCase.propertyInvestmentCase;

  const propertyInvestmentCasePropertyManagement =
    investmentCase.propertyManagement;

  const propertyInvestmentCaseImportantNotice = investmentCase.importantNotice;

  const amenitiesData = amenities;

  const monthlyUpdatesData = monthlyData;

  const propertyType = type;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const theme = useTheme();

  const handleOnClickBuyBlocks = () => {
    history.push(`/listings/${listingId || 1}/buy-blocks`);
  };

  return (
    pageHasLoaded && (
      <Layout hideTabNavigation>
        <PageContainer>
          <Container style={{ marginBottom: theme.spacing(4) }}>
            <Button onClick={() => history.push('/listings')}>
              <ChevronLeftIcon /> Back to Listings
            </Button>
          </Container>
          <Box color="#fff" bgcolor={theme.palette.grey}>
            <Container>
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <Typography>{propertyName}</Typography>
                </Grid>
                <Grid
                  item
                  style={{
                    marginLeft: 'auto',
                  }}
                  xs={4}
                >
                  <Box display="flex" alignItems="center">
                    <PeopleIcon />
                    <Typography
                      style={{
                        marginRight: theme.spacing(2),
                        paddingRight: theme.spacing(2),
                        borderRight: '1px solid #fff',
                      }}
                    >
                      {propertyInvestorsCount} Investors
                    </Typography>
                    <AttachMoneyIcon />
                    <Typography
                      style={{
                        marginRight: theme.spacing(3),
                      }}
                    >
                      Blocks Price
                    </Typography>
                    <Typography variant="h6">{propertyUnitPrice}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Box
            bgcolor={theme.palette.background.paper}
            display="flex"
            flexWrap="wrap"
            justifyContent="space-around"
            style={{
              marginBottom: theme.spacing(3),
            }}
            overflow="hidden"
          >
            <GridList
              cols={2.5}
              style={{
                flexWrap: 'nowrap',
                // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
                transform: 'translateZ(0)',
              }}
            >
              {propertyImagesData.map(propertyImage => (
                <GridListTile style={{ height: 320 }} key={propertyImage.img}>
                  <img src={propertyImage.img} alt={propertyImage.title} />
                  <GridListTileBar
                    style={{
                      background:
                        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                    }}
                  />
                </GridListTile>
              ))}
            </GridList>
          </Box>
          <Container>
            <Box display="flex" mb={3}>
              <Box display="flex" alignItems="center">
                <Box alignItems="center" display="flex" mr={2}>
                  <Typography
                    variant="subtitle2"
                    style={{ marginRight: theme.spacing(1) }}
                  >
                    {numberOfBed}
                  </Typography>
                  <HotelIcon color="secondary" />
                </Box>

                <Box alignItems="center" display="flex" mr={2}>
                  <Typography
                    variant="subtitle2"
                    style={{ marginRight: theme.spacing(1) }}
                  >
                    {numberOfRestroom}
                  </Typography>
                  <BathtubIcon color="secondary" />
                </Box>

                <Box alignItems="center" display="flex" mr={3}>
                  <Typography
                    variant="subtitle2"
                    style={{ marginRight: theme.spacing(1) }}
                  >
                    {numberOfCarPark}
                  </Typography>
                  <DriveEtaIcon color="secondary" />
                </Box>
                <Typography variant="body2">{propertyType}</Typography>
              </Box>
              <Button
                color="primary"
                variant="contained"
                size="large"
                style={{
                  marginLeft: 'auto',
                  marginRight: theme.spacing(3),
                }}
                onClick={handleOnClickBuyBlocks}
              >
                Buy Blocks
              </Button>
              <Button color="secondary" size="large" variant="contained">
                Sell Blocks
              </Button>
            </Box>
            <Card
              style={{
                marginBottom: theme.spacing(3),
              }}
            >
              <CardHeader
                title={<Typography variant="h4">Investment Case</Typography>}
              />
              <CardContent>
                <Box mb={3}>
                  <Typography gutterBottom variant="h5">
                    Overview
                  </Typography>
                  <Typography gutterBottom>
                    {propertyInvestmentCaseOverview}
                  </Typography>
                </Box>
                <Box mb={3}>
                  <Typography gutterBottom variant="h5">
                    The Location
                  </Typography>
                  <Typography gutterBottom>
                    {propertyInvestmentCaseLocation}
                  </Typography>
                </Box>
                <Box mb={3}>
                  <Typography gutterBottom variant="h5">
                    Property Investment Case
                  </Typography>
                  <Typography gutterBottom>{propertyInvestmentCase}</Typography>
                </Box>
                <Box mb={3}>
                  <Typography gutterBottom variant="h5">
                    Property Management
                  </Typography>
                  <Typography gutterBottom>
                    {propertyInvestmentCasePropertyManagement}
                  </Typography>
                </Box>
                <Box mb={3}>
                  <Typography gutterBottom variant="h5">
                    Important Notice
                  </Typography>
                  <Typography gutterBottom>
                    {propertyInvestmentCaseImportantNotice}
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            <Card
              style={{
                marginBottom: theme.spacing(3),
              }}
            >
              <CardHeader
                title={<Typography variant="h4">Amenities</Typography>}
              />
              <CardContent>
                <Box component="ul">
                  {amenitiesData.map((amenity, index) => (
                    <Typography key={index} component="li">
                      {amenity}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>
            <Card
              style={{
                marginBottom: theme.spacing(3),
              }}
            >
              <CardHeader
                title={<Typography variant="h4">Monthly Updates</Typography>}
              />
              <CardContent>
                {monthlyUpdatesData.map(monthlyUpdate => (
                  <Box mb={3}>
                    <Typography gutterBottom variant="h6">
                      {monthlyUpdate.month}
                    </Typography>
                    <Typography>{monthlyUpdate.update}</Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Container>
        </PageContainer>
      </Layout>
    )
  );
};

export default withRouter(ListingDetails);
