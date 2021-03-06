import React from 'react';
import { IconButton, Typography, makeStyles } from '@material-ui/core';
import { combine } from '../utils';

const useStyles = makeStyles((theme) => ({
  leftBorderRadius: {
    borderRadius: '50% 0 0 50%'
  },
  rightBorderRadius: {
    borderRadius: '0 50% 50% 0'
  },
  buttonContainer: {
    display: 'flex'
  },
  button: {
    height: 36,
    width: 36,
    padding: 0
  },
  buttonText: {
    lineHeight: 1.6
  },
  outlined: {
    
    // border: `1px solid ${theme.palette.primary.dark}`,
    border: `1px solid #805AD5`
  },
  filled: {
    '&:hover': {
      // backgroundColor: theme.palette.primary.dark
      backgroundColor: '#805AD5'
    },
    // backgroundColor: theme.palette.primary.dark
      backgroundColor: '#805AD5'
  },
  highlighted: {
    backgroundColor: theme.palette.action.hover
  },
  contrast: {
    color: theme.palette.primary.contrastText
  }
}));

const Day = ({
  startOfRange,
  endOfRange,
  disabled,
  highlighted,
  outlined,
  filled,
  onClick,
  onHover,
  value
}) => {
  const classes = useStyles();

  return (
    <div
      className={combine(
        classes.buttonContainer,
        startOfRange && classes.leftBorderRadius,
        endOfRange && classes.rightBorderRadius,
        !disabled && highlighted && classes.highlighted
      )}
    >
      <IconButton
        className={combine(
          classes.button,
          !disabled && outlined && classes.outlined,
          !disabled && filled && classes.filled
        )}
        disabled={disabled}
        onClick={onClick}
        onMouseOver={onHover}
      >
        <Typography
          color={!disabled ? 'textPrimary' : 'textSecondary'}
          className={combine(
            classes.buttonText,
            !disabled && filled && classes.contrast
          )}
          variant="body2"
        >
          {value}
        </Typography>
      </IconButton>
    </div>
  );
};

export default Day;
