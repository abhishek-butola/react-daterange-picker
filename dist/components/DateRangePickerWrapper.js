import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core';
import DateRangePicker from './DateRangePicker';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const useStyles = makeStyles(() => ({
  dateRangePickerContainer: {
    position: 'relative'
  },
  dateRangePicker: {
    position: 'relative',
    zIndex: 1
  },
  dateRangeBackdrop: {
    //yes
    // position: 'fixed',
    // height: '100vh',
    // width: '100vw',
    // bottom: 0,
    // zIndex: 0,
    // right: 0,
    // left: 0,
    // top: 0,
    width: "100%",
    maxWidth: "100%"
  }
}));

const DateRangePickerWrapper = props => {
  const classes = useStyles();
  const {
    closeOnClickOutside,
    wrapperClassName,
    toggle,
    open
  } = props;

  const handleToggle = () => {
    if (closeOnClickOutside === false) {
      return;
    }

    toggle();
  };

  const handleKeyPress = event => event?.key === 'Escape' && handleToggle();

  const wrapperClasses = classNames(classes.dateRangePicker, wrapperClassName);
  return /*#__PURE__*/_jsxs("div", {
    className: classes.dateRangePickerContainer,
    children: [open && /*#__PURE__*/_jsx("div", {
      className: classes.dateRangeBackdrop,
      onKeyPress: handleKeyPress,
      onClick: handleToggle
    }), /*#__PURE__*/_jsx("div", {
      className: wrapperClasses,
      children: /*#__PURE__*/_jsx(DateRangePicker, { ...props
      })
    })]
  });
};

export default DateRangePickerWrapper;