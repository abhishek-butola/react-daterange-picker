# Material-UI React DateRange Picker

React date range picker using MATERIAL-UI

<a href='https://www.npmjs.com/package/materialui-react-daterange-picker'>
    <img src='https://img.shields.io/npm/v/materialui-react-daterange-picker.svg' alt='Latest npm version'>
</a>

## Preview

![Screenshot](/screenshot.png?raw=true "Screenshot")

## Usage

```bash
npm i materialui-react-daterange-picker
```

## Basic example
```jsx
import { useState } from 'react';
import { DateRangePicker } from 'materialui-react-daterange-picker';

const App = (props) => {
    const [open, setOpen] = useState(false);
    const [dateRange, setDateRange] = useState({});

    const toggle = () => setOpen(!open);
    const change = (range) => setDateRange(range);

    return (
        <DateRangePicker
            open={open}
            toggle={toggle}
            onChange={change}
        />
    );
}

export default App;
```

## Props

Name | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
`onChange` | `(DateRange) => void` | _required_ | - | handler function for providing selected date range
`toggle` | `() => void` | _required_ | - | function to show / hide the DateRangePicker
`initialDateRange` | `DateRange` | _optional_ | `{}` | initially selected date range
`minDate` | `Date` or `string` | _optional_ | 10 years ago | min date allowed in range
`maxDate` | `Date` or `string` | _optional_ | 10 years from now | max date allowed in range
`definedRanges` | `DefinedRange[]` | _optional_ | - | custom defined ranges to show in the list
`closeOnClickOutside` | `boolean` | _optional_ | `true` | defines if DateRangePicker will be closed when clicking outside of it
`wrapperClassName` | `object` | _optional_ | `undefined` | defines additional wrapper style classes

## Made by

https://github.com/jungsoft/materialui-daterange-picker
