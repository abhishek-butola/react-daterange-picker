import React from 'react';
import { isSameDay } from 'date-fns';
import { List, ListItem, ListItemText, Button } from '@material-ui/core';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const isSameRange = (first, second) => {
  const {
    startDate: fStart,
    endDate: fEnd
  } = first;
  const {
    startDate: sStart,
    endDate: sEnd
  } = second;

  if (fStart && sStart && fEnd && sEnd) {
    return isSameDay(fStart, sStart) && isSameDay(fEnd, sEnd);
  }

  return false;
};

const DefinedRanges = ({
  ranges,
  setRange,
  selectedRange,
  closeModal
}) => /*#__PURE__*/_jsxs(List, {
  children: [ranges.map((range, idx) =>
  /*#__PURE__*/
  // eslint-disable-next-line react/no-array-index-key
  _jsx(ListItem, {
    button: true,
    onClick: () => {
      setRange(range);
      closeModal();
    },
    children: /*#__PURE__*/_jsx(ListItemText, {
      primaryTypographyProps: {
        variant: 'body2',
        style: {
          fontWeight: isSameRange(range, selectedRange) ? 'bold' : 'normal'
        }
      },
      children: range.label
    })
  }, idx)), /*#__PURE__*/_jsx(ListItem, {
    children: /*#__PURE__*/_jsx(Button, {
      onClick: closeModal,
      variant: "contained",
      style: {
        boxShadow: 'none',
        color: "#fff",
        backgroundColor: '#805AD5'
      },
      children: "Close"
    })
  })]
});

export default DefinedRanges;