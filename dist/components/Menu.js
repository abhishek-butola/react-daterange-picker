import React from 'react';
import { format, differenceInCalendarMonths } from 'date-fns';
import { Paper, Grid, Typography, Divider, makeStyles } from '@material-ui/core';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import Month from './Month';
import DefinedRanges from './DefinedRanges';
import { MARKERS } from './DateRangePicker';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const useStyles = makeStyles(theme => ({
  header: {
    padding: '20px 70px'
  },
  headerItem: {
    flex: 1,
    textAlign: 'center'
  },
  divider: {
    borderLeft: `1px solid ${theme.palette.action.hover}`,
    marginBottom: 20
  }
}));

const Menu = props => {
  const classes = useStyles();
  const {
    ranges,
    dateRange,
    minDate,
    maxDate,
    firstMonth,
    setFirstMonth,
    secondMonth,
    setSecondMonth,
    setDateRange,
    helpers,
    handlers
  } = props;
  const {
    startDate,
    endDate
  } = dateRange;
  const canNavigateCloser = differenceInCalendarMonths(secondMonth, firstMonth) >= 2;
  const commonProps = {
    dateRange,
    minDate,
    maxDate,
    helpers,
    handlers
  };
  return /*#__PURE__*/_jsx(Paper, {
    elevation: 1,
    style: {
      border: 'none'
    },
    children: /*#__PURE__*/_jsxs(Grid, {
      container: true,
      direction: "row",
      wrap: "nowrap",
      children: [/*#__PURE__*/_jsxs(Grid, {
        children: [/*#__PURE__*/_jsxs(Grid, {
          container: true,
          className: classes.header,
          alignItems: "center",
          children: [/*#__PURE__*/_jsx(Grid, {
            item: true,
            className: classes.headerItem,
            children: /*#__PURE__*/_jsx(Typography, {
              variant: "subtitle1",
              children: startDate ? format(startDate, 'MMMM DD, YYYY') : 'Start Date'
            })
          }), /*#__PURE__*/_jsx(Grid, {
            item: true,
            className: classes.headerItem,
            children: /*#__PURE__*/_jsx(ArrowRightAlt, {
              color: "action"
            })
          }), /*#__PURE__*/_jsx(Grid, {
            item: true,
            className: classes.headerItem,
            children: /*#__PURE__*/_jsx(Typography, {
              variant: "subtitle1",
              children: endDate ? format(endDate, 'MMMM DD, YYYY') : 'End Date'
            })
          })]
        }), /*#__PURE__*/_jsx(Divider, {}), /*#__PURE__*/_jsxs(Grid, {
          container: true,
          direction: "row",
          justify: "center",
          wrap: "nowrap",
          children: [/*#__PURE__*/_jsx(Month, { ...commonProps,
            value: firstMonth,
            setValue: setFirstMonth,
            navState: [true, canNavigateCloser],
            marker: MARKERS.FIRST_MONTH
          }), /*#__PURE__*/_jsx("div", {
            className: classes.divider
          }), /*#__PURE__*/_jsx(Month, { ...commonProps,
            value: secondMonth,
            setValue: setSecondMonth,
            navState: [canNavigateCloser, true],
            marker: MARKERS.SECOND_MONTH
          })]
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: classes.divider
      }), /*#__PURE__*/_jsx(Grid, {
        children: /*#__PURE__*/_jsx(DefinedRanges, {
          selectedRange: dateRange,
          ranges: ranges,
          setRange: setDateRange
        })
      })]
    })
  });
};

export default Menu;