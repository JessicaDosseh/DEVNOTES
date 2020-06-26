import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { makeStyles } from '@material-ui/core/styles';
import DEVNOTES_Light from '../../../assets/DEVNOTES_Light.png';
import DEVNOTES_Dark from '../../../assets/DEVNOTES_Dark.png';

const NavBar = (props) => {
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
      <Box className={classes.leftContainer}>
        <IconButton color='inherit' onClick={props.toggleTheme}>
          <RadioButtonUncheckedIcon style={{ fontSize: 20 }} />
        </IconButton>
      </Box>

      <Box className={classes.centerContainer}>
        <Link href='/' color='inherit'>
          <span>
            <Typography variant='caption' style={{ fontWeight: 600 }}>
              the
            </Typography>
            <Typography variant='caption' style={{ fontWeight: 600 }}>
              Devnotes
            </Typography>
          </span>
        </Link>
      </Box>

      <Box className={classes.rightContainer}>
        <Box className={classes.icons}>
          {(() => {
            switch (viewPort) {
              case true:
                return null;
              default:
                return (
                  <Link href='/archive' color='inherit'>
                    <Typography variant='caption' style={{ fontWeight: 600 }}>
                      archive
                    </Typography>
                  </Link>
                );
            }
          })()}

          <Link href='/archive' color='inherit'>
            {(() => {
              switch (props.theme) {
                case 'dark':
                  return (
                    <img
                      src={DEVNOTES_Light}
                      alt='DEVNOTES'
                      style={{ width: 20, paddingTop: 5 }}
                    />
                  );
                default:
                  return (
                    <img
                      src={DEVNOTES_Dark}
                      alt='DEVNOTES'
                      style={{ width: 20, paddingTop: 5 }}
                    />
                  );
              }
            })()}
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    textDecoration: 'none',
    // textTransform: 'uppercase',
  },
  leftContainer: {
    width: '30%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rightContainer: {
    width: '30%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  centerContainer: {
    width: '30%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  icons: {
    width: '45%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default NavBar;
