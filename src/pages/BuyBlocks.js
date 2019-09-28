import React from 'react';
import { Layout } from '../components/Layout';
import { PageContainer } from '../components/PageContainer';
import {
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  useTheme,
  Button,
} from '@material-ui/core';
import { helper } from '../utils/helper';

export const BuyBlocks = () => {
  const propertyName = `Urban Deca Towers`;

  const theme = useTheme();

  const [values, setValues] = React.useState({
    blocks: 0,
  });

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const blockPrice = 300;

  const totalCost = blockPrice * values.blocks;

  return (
    <Layout hideTabNavigation>
      <PageContainer>
        <Container>
          <Typography
            variant="h5"
            style={{
              marginBottom: theme.spacing(3),
              textAlign: 'center',
            }}
          >{`Buy ${propertyName} Blocks`}</Typography>
          <Card
            style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="body1"
                style={{ marginBottom: theme.spacing(2) }}
              >
                Block price: {blockPrice}
              </Typography>
              <TextField
                fullWidth
                label="Blocks to buy"
                value={values.blocks}
                name="blocks"
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                style={{
                  marginBottom: theme.spacing(5),
                }}
              />
              <Typography
                gutterBottom
                variant="h6"
                style={{
                  marginBottom: theme.spacing(3),
                }}
              >
                Total cost: {totalCost}
              </Typography>
              <Button
                fullWidth
                color="primary"
                size="large"
                variant="contained"
                style={{ marginBottom: theme.spacing(1) }}
                onClick={() => {
                  helper.unionbankOath();
                }}
              >
                Buy Blocks
              </Button>
              <Button fullWidth>Cancel</Button>
            </CardContent>
          </Card>
        </Container>
      </PageContainer>
    </Layout>
  );
};
