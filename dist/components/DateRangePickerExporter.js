import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import DateRangePickerWrapper from './DateRangePickerWrapper';
import generateClassName from '../generateClassName';
import { jsx as _jsx } from "react/jsx-runtime";

const DateRangePickerExporter = props => /*#__PURE__*/_jsx(StylesProvider, {
  generateClassName: generateClassName,
  children: /*#__PURE__*/_jsx(DateRangePickerWrapper, { ...props
  })
});

export default DateRangePickerExporter;