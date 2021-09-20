import React from 'react';
import { isSameDay } from 'date-fns';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { jsx as _jsx } from "react/jsx-runtime";

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
  selectedRange
}) => /*#__PURE__*/_jsx(List, {
  children: ranges.map((range, idx) =>
  /*#__PURE__*/
  // eslint-disable-next-line react/no-array-index-key
  _jsx(ListItem, {
    button: true,
    onClick: () => setRange(range),
    children: /*#__PURE__*/_jsx(ListItemText, {
      primaryTypographyProps: {
        variant: 'body2',
        style: {
          fontWeight: isSameRange(range, selectedRange) ? 'bold' : 'normal'
        }
      },
      children: range.label
    })
  }, idx))
});

export default DefinedRanges;