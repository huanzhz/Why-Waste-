import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
    flex-direction: column;
    padding: 20px;
`;

const Center = styled.span`
    text-align: center;
`;




const AboutUsPage = () => (
  <Wrapper>
    <Center>
      <Paper elevation={1}>
        <Typography variant="h6" component="h6">
        Food waste accounts for about 10% (about 0.8 million tonnes) of the total waste generated in Singapore, but only 16% (0.13 million tonne) of the food waste gets recycled annually. 
        </Typography>
        <p></p>
        <Typography variant="h6" component="h6">
        The amount of food waste generated in Singapore has increased by about 40 % over the past decade and is expected to increase. 
        </Typography>
        <p></p>
        <Typography variant="h6" component="h6">
        Besides the effort required to collect and dispose of it, food waste contaminates recyclables and compromises recycling efforts. 
        </Typography>
        <p></p>
        <Typography variant="h6" component="h6">
        It may also encourage odour nuisance issues and vermin proliferation if not managed properly.
        </Typography>
        <p></p>
        <Typography variant="h6" component="h6">
        They say "Prevention is better than Cure!"
        </Typography>
        <p></p>
        <Typography variant="h6" component="h6">
        So why not limit the food wastage generation at source instead and to reinforce the positive behaviour, reward people for this act?
        </Typography>
        <p></p>
        <Typography variant="h6" component="h6">
        We are a team of students who hope to do our part, save our resources, and urge everyone around us to do theirs as well!
        </Typography>
      </Paper>
      </Center>
    </Wrapper>
  );
export default AboutUsPage;