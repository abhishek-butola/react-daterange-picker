import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core';
import DateRangePicker from './DateRangePicker';

const useStyles = makeStyles(() => ({
  dateRangePickerContainer: {
    position: 'relative'
  },
  dateRangePicker: {
    position: 'relative',
    zIndex: 1
  },
  dateRangeBackdrop: {
    // position: 'fixed',
    // height: '100vh',
    // width: '100vw',
    // bottom: 0,
    // zIndex: 0,
    // right: 0,
    // left: 0,
    // top: 0,
  }
}));

const DateRangePickerWrapper = (props) => {
  const classes = useStyles();

  const { closeOnClickOutside, wrapperClassName, toggle, open } = props;

  const handleToggle = () => {
    if (closeOnClickOutside === false) {
      return;
    }

    toggle();
  };

  const handleKeyPress = (event) => event?.key === 'Escape' && handleToggle();

  const wrapperClasses = classNames(classes.dateRangePicker, wrapperClassName);

  return (
    <div className={classes.dateRangePickerContainer}>
      {open && (
        <div
          className={classes.dateRangeBackdrop}
          onKeyPress={handleKeyPress}
          onClick={handleToggle}
        />
      )}

      <div className={wrapperClasses}>
        <DateRangePicker {...props} />
      </div>
    </div>
  );
};

export default DateRangePickerWrapper;
