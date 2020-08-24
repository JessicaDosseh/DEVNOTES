import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Pen } from '../../SVG/Pen';

const ComingSoon = (props) => {
  const classes = useStyles();

  let viewPort = false;
  const md = useMediaQuery('(min-width: 1050px)');
  if (viewPort === md) {
    viewPort = true;
  } else {
    viewPort = false;
  }

  return (
    <Box className={classes.root}>
      {(() => {
        switch (props.theme) {
          case 'dark':
            return <Pen stroke={'#fff'} width={'50'} height={'60'} />;
          default:
            return <Pen stroke={'#000'} width={'50'} height={'60'} />;
        }
      })()}
      <Typography variant='h4'>Coming Soon</Typography>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '80vh',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default ComingSoon;
