import React from 'react';
import { setMonth, getMonth, setYear, getYear } from 'date-fns';
import { Grid, makeStyles, IconButton, Select, MenuItem } from '@material-ui/core';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const useStyles = makeStyles(() => ({
  iconContainer: {
    padding: 5
  },
  icon: {
    padding: 10,
    '&:hover': {
      background: 'none'
    }
  }
}));
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const generateYears = (relativeTo, count) => {
  const half = Math.floor(count / 2);
  return Array(count).fill(0).map((_y, i) => relativeTo.getFullYear() - half + i);
};

const Header = ({
  date,
  setDate,
  nextDisabled,
  prevDisabled,
  onClickNext,
  onClickPrevious
}) => {
  const classes = useStyles();

  const handleMonthChange = event => {
    setDate(setMonth(date, parseInt(event.target.value)));
  };

  const handleYearChange = event => {
    setDate(setYear(date, parseInt(event.target.value)));
  };

  return /*#__PURE__*/_jsxs(Grid, {
    container: true,
    justify: "space-between",
    alignItems: "center",
    children: [/*#__PURE__*/_jsx(Grid, {
      item: true,
      className: classes.iconContainer,
      children: /*#__PURE__*/_jsx(IconButton, {
        className: classes.icon,
        disabled: prevDisabled,
        onClick: onClickPrevious,
        children: /*#__PURE__*/_jsx(ChevronLeft, {
          color: prevDisabled ? 'disabled' : 'action'
        })
      })
    }), /*#__PURE__*/_jsx(Grid, {
      item: true,
      children: /*#__PURE__*/_jsx(Select, {
        value: getMonth(date),
        onChange: handleMonthChange // MenuProps={{ disablePortal: true }}
        ,
        children: MONTHS.map((month, idx) => /*#__PURE__*/_jsx(MenuItem, {
          value: idx,
          children: month
        }, month))
      })
    }), /*#__PURE__*/_jsx(Grid, {
      item: true,
      children: /*#__PURE__*/_jsx(Select, {
        value: getYear(date),
        onChange: handleYearChange //  MenuProps={{ disablePortal: true }}
        ,
        children: generateYears(date, 5).map(year => /*#__PURE__*/_jsx(MenuItem, {
          value: year,
          children: year
        }, year))
      })
    }), /*#__PURE__*/_jsx(Grid, {
      item: true,
      className: classes.iconContainer,
      children: /*#__PURE__*/_jsx(IconButton, {
        className: classes.icon,
        disabled: nextDisabled,
        onClick: onClickNext,
        children: /*#__PURE__*/_jsx(ChevronRight, {
          color: nextDisabled ? 'disabled' : 'action'
        })
      })
    })]
  });
};

export default Header;