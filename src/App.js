import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import MainPage from './containers/MainPage';
import FormPage from './containers/FormPage';
import LoyaltyPointsPage from './containers/LoyaltyPointsPage';
import AboutUsPage from './containers/AboutUsPage';
import LeaderBoardPage from './containers/LeaderBoardPage';
import PartnerPage from './containers/PartnerPage';
import CouponPage from './containers/CouponPage';
import OrderLessPage from './containers/OrderLessPage';

const Nav = styled.nav`
	position: fixed;
	top: 20px;
	left: 20px;
	* {
		outline: none;
		text-decoration: none;
		color: #eee;
		margin-right: 30px;
	}
`;
const App = () => (
	<Router>
		<>
			<Nav>
				<Link to="/">Home</Link>
				<Link to="/form">Locations</Link>
				<Link to="/partners">Partners</Link>
				<Link to="/leaderboard">LeaderBoard</Link>
				<Link to="/loyaltypoints">LoyaltyPoints</Link>
				<Link to="/aboutus">AboutUs</Link>
				<Link to="/coupondirectory">CouponDirectory</Link>
				<Link to="/orderless">OrderLess</Link>
			</Nav>
			<Route path="/" exact component={MainPage} />
			<Route path="/form" component={FormPage} />
			<Route path="/loyaltypoints" component={LoyaltyPointsPage} />
			<Route path="/aboutus" component={AboutUsPage} />
			<Route path="/leaderboard" component={LeaderBoardPage} />
			<Route path="/partners" component={PartnerPage} />
			<Route path="/coupondirectory" component={CouponPage} />
			<Route path="/orderless" component={OrderLessPage} />
		</>
	</Router>
);
export default App;
