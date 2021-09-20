import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import DateRangePickerWrapper from './DateRangePickerWrapper';
import generateClassName from '../generateClassName';

const DateRangePickerExporter = (props) => (
  <StylesProvider generateClassName={generateClassName}>
    <DateRangePickerWrapper {...props} />
  </StylesProvider>
);

export default DateRangePickerExporter;
