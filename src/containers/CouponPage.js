import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
//import tileData from './tileData';
import starbuckcoupon from '../Image/starbuckcoupon.jpg';
import styled from 'styled-components';
import maccoupon from '../Image/maccoupon.jpg';
import kfccoupon from '../Image/kfccoupon.jpg';
import subwaycoupon from '../Image/subwaycoupon.jpg';
import sushicoupon from '../Image/sushicoupon.jpg';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
    flex-direction: column;
    padding: 20px;
`;

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const tileData = [
    {
       img: starbuckcoupon,
       title: 'Starbuck',
       author: 'author',
   },
   {
    img: maccoupon,
    title: 'Macdonal',
    author: 'author',
},
{
    img: kfccoupon,
    title: 'KFC',
    author: 'author',
},
{
    img: subwaycoupon,
    title: 'Subway',
    author: 'author',
},
{
    img: sushicoupon,
    title: 'Sushi',
    author: 'author',
},
  ];


function TitlebarGridList(props) {
  const { classes } = props;

  return (
      <Wrapper>
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </Wrapper>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);
