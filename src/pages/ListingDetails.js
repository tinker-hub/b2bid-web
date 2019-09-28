import React, { useEffect } from 'react';
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
} from '@material-ui/icons';

import { PageContainer } from '../components/PageContainer';
import { Layout } from '../components/Layout';

import propertyImage1 from '../assets/images/property-image1.jpg';
import propertyImage2 from '../assets/images/property-image2.jpg';
import propertyImage3 from '../assets/images/property-image3.jpg';
import propertyImage4 from '../assets/images/property-image4.jpg';
import propertyImage5 from '../assets/images/property-image5.jpg';

export const ListingDetails = props => {
  const { history, location } = props;

  const propertyName =
    'Unit 1906, URBAN DECA TOWER EDSA, 69 EDSA and, Sierra Madre, Brgy, Mandaluyong, 1550';
  // TODO: Format this count 1,000
  const propertyInvestorsCount = 1110;
  // TODO: Format - PHP 100.00
  const propertyUnitPrice = 82;

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

  const propertyInvestmentCaseOverview = `3 bedroom home, 2 bathroom, 3 car space family home located in inner suburb of Perth
  Positioned on 506sqm corner block of a quiet tree lined street with a desirable corner position and lovely street appeal
  Dual street access and lock up secure parking for three cars from the side street
  Character home, tastefully renovated and extended
  Spacious master bedroom with en-suite, two additional bedrooms and a second renovated bathroom.
  Open plan lounge, dining and kitchen that overlooks the garden, undercover alfresco and private terrace.
  High ceilings throughout, ornate ceilings, polished timber floorboards, working fire place and lead light windows
  Ducted air conditioning and stone benchtops to kitchen and en-suite
  Located in the ‘Golden Triangle’ of Kensington as it is within the catchment of three excellent primary schools plus it is a short stroll to Ernest Johnson Oval, many cafes and shops
  Estimated 1.11% p.a. geared net rental yield and 7.4% 20 year his`;

  const propertyInvestmentCaseLocation = `Kensington is located in the inner ring of Perth and is characterised by tree-lined streets and manicured gardens. It is 6km from the Perth CBD and surrounded by the majestic foreshore of South Perth and Victoria Park. Kensington is a 5 minute walk to Perth’s largest cafe, restaurant and pub precincts along the Victoria Park Strip.

  This beautifully presented home is located within the ‘Golden Triangle’ of Kensington - the catchment of three excellent primary schools- thus the area is popular amongst young and growing families.
  
  `;

  const propertyInvestmentCase = `This property was purchased on market, with settlement occurring on 17th January 2019. The property was acquired for $1,040,000 and will include 30% gearing ($312,000). Acquisition costs (including stamp duty, legal fees and buyers’ agent fees) are estimated to be $73,643 and will be subjected to linear amortisation over 5 years (see Capital Returns Tab for a breakdown of Acquisition Costs). In addition, an estimated cash reserve of $18,357 is being raised for the investment, giving a total Trust value of $1,132,000 and an Initial Brick Price of $82. If the Acquisition Costs are above/below estimates, these costs/surpluses will be funded from/added to the Cash Reserve.

  A mortgage for $312,000 was used in financing the initial purchase. The mortgage is a 30 year loan, at a variable rate of 4.94%, with the first 5 years interest only, and the following 25 years principal and interest repayments. We will continue to monitor interest rates throughout the life of this investment and act in the best interests of Brick Owners.
  
  At purchase, the property is tenanted from 18th February 2019 at an agreed market rent of $700 per week. This provides a forecasted gross yield of 4.44% p.a. and estimated net yield of 1.11% p.a. (paid monthly), after expenses.`;

  const propertyInvestmentCasePropertyManagement = `We use a third party managing agent to manage the properties on behalf of Brick Owners. Brick Owners won’t be required to take an active part in managing a property and will not be consulted for any decisions relating to a property. We will operate within the management agreement framework for all properties so that Brick Owners are left only to manage their portfolio. We pro-actively manage all BrickX properties to ensure that they are, as much as possible, consistently tenanted and kept to the highest standards to protect Brick Owners’ investment, both from a capital and rental income perspective. There may be periods of time where a property is vacant, and expenses during this period are covered by a contingency fund that provides over 3 months of cover (this is for expenses only and not for the payment of any net rental income to Brick Owners). We have also put in place procedures to ensure that before a lease expires, the tenant will be asked to confirm their position with regards to the tenancy agreement. If the tenant does not sign a new lease within a certain time, the property will be advertised for lease. The rental price may be slightly reduced in order to attract a new tenant if necessary. We’ll always seek to achieve a balance between the forecast yield and market conditions to minimise the risk that the property is vacant for extended periods.`;

  const propertyInvestmentCaseImportantNotice = `*Forecasts may not be achieved and are not a reliable indicator of future performance. The advice provided to you is general advice only. It’s been prepared and presented without taking into account your personal objectives, financial situation or needs. Before making any decision in relation to BrickX or any products offered by BrickX you should read the Product Disclosure Statement (PDS) and consider whether BrickX is right for you.

  BrickX products are issued by BrickX Financial Services Limited (ABN 67 616 118 088) (AFSL 494878) (BrickX Financial Services). Neither BrickX nor BrickX Financial Services, guarantees any rate of return or the capital value or return of any money invested. Past performance is not an indication of future performance. Fluctuations in Brick Price will influence the effective return, and you should regularly refer to Returns and Valuation information on the summary page for the latest data.`;

  const amenitiesData = ['Renovated 3 bedroom', '2 bathroom', '3 carspace'];

  const monthlyUpdatesData = [
    {
      month: 'Aug 2019',
      update: `The distribution for the month ending August 2019 was $0.11 per Brick. This has been paid into Members’ Digital Wallets.

    The current tenant has broken the lease and vacated the property. The property will be re-tenanted as a break lease until Feb 2020 and there will be no disruption to rental payments.`,
    },
    {
      month: 'July 2019',
      update: `The distribution for the month ending July 2019 was $0.03 per Brick. This has been paid into Members’ Digital Wallets.

      As at July 19th, the variable interest rate for this property has decreased to 4.19%.
      
      `,
    },
    {
      month: 'Jun 2019',
      update: `The distribution for the month ending June 2019 was $0.05 per Brick. This has been paid into Members’ Digital Wallets.

      The variable interest rate across all properties with gearing have decreased by 0.25% from June 21st, 2019.
      
      The property valuation as at Jun 2019 is $405,000. The updated Brick Valuation is $32.67 which includes the cash reserve and unamortised costs for the property.`,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const theme = useTheme();

  const handleOnClickBuyBlocks = () => {
    const {
      state: { listingId },
    } = location;

    history.push(`/listings/${listingId || 1}/buy-blocks`);
  };

  return (
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
          <Box display="flex" justifyContent="flex-end" mb={3}>
            <Button
              color="primary"
              variant="contained"
              size="large"
              style={{
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
  );
};

export default withRouter(ListingDetails);
