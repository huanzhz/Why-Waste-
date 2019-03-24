import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	flex-direction: column;
`;

const Center = styled.span`
  margin: 0 auto;
	text-align: center;
`;




const LoyaltyPointsPage = () => (
  <Wrapper>
    <Center>
      <Paper elevation={1}>
        <Typography variant="h1" component="h1">
          52
        </Typography>
        <Typography variant="h3" component="h3">
          points
          </Typography>
      </Paper>
      </Center>
    </Wrapper>
  );
export default LoyaltyPointsPage;
