import React, { useState } from 'react';
import { addMonths, isSameDay, isWithinRange, isAfter, isBefore, isSameMonth, addYears, max, min } from 'date-fns';
import { getValidatedMonths, parseOptionalDate } from '../utils';
import { defaultRanges } from '../defaults';
import Menu from './Menu';

export const MARKERS = {
    FIRST_MONTH: Symbol('firstMonth'),
    SECOND_MONTH: Symbol('secondMonth'),
};

const DateRangePicker = (props) => {
    const today = new Date();

    const {
        open,
        onChange,
        initialDateRange,
        minDate,
        maxDate,
        definedRanges = defaultRanges,
    } = props;

    const minDateValid = parseOptionalDate(minDate, addYears(today, -10));
    const maxDateValid = parseOptionalDate(maxDate, addYears(today, 10));
    const [intialFirstMonth, initialSecondMonth] = getValidatedMonths(
        initialDateRange || {},
        minDateValid,
        maxDateValid,
    );

    const [dateRange, setDateRange] = useState({ ...initialDateRange });
    const [hoverDay, setHoverDay] = useState();
    const [firstMonth, setFirstMonth] = useState(intialFirstMonth || today);
    const [secondMonth, setSecondMonth] = useState(initialSecondMonth || addMonths(firstMonth, 1));

    const { startDate, endDate } = dateRange;

    // handlers
    const setFirstMonthValidated = (date) => {
        if (isBefore(date, secondMonth)) {
            setFirstMonth(date);
        }
    };

    const setSecondMonthValidated = (date) => {
        if (isAfter(date, firstMonth)) {
            setSecondMonth(date);
        }
    };

    const setDateRangeValidated = (range) => {
        let { startDate: newStart, endDate: newEnd } = range;

        if (newStart && newEnd) {
            range.startDate = newStart = max(newStart, minDateValid);
            range.endDate = newEnd = min(newEnd, maxDateValid);

            setDateRange(range);
            onChange(range);

            setFirstMonth(newStart);
            setSecondMonth(isSameMonth(newStart, newEnd) ? addMonths(newStart, 1) : newEnd);
        }
        else {
            const emptyRange = {};

            setDateRange(emptyRange);
            onChange(emptyRange);

            setFirstMonth(today);
            setSecondMonth(addMonths(firstMonth, 1));
        }
    };

    const onDayClick = (day) => {
        if (startDate && !endDate && !isBefore(day, startDate)) {
            const newRange = { startDate, endDate: day };
            onChange(newRange);
            setDateRange(newRange);
        }
        else {
            setDateRange({ startDate: day, endDate: undefined });
        }
        setHoverDay(day);
    };

    const onMonthNavigate = (marker, action) => {
        if (marker === MARKERS.FIRST_MONTH) {
            const firstNew = addMonths(firstMonth, action);
            if (isBefore(firstNew, secondMonth)) setFirstMonth(firstNew);
        }
        else {
            const secondNew = addMonths(secondMonth, action);
            if (isBefore(firstMonth, secondNew)) setSecondMonth(secondNew);
        }
    };

    const onDayHover = (date) => {
        if (startDate && !endDate) {
            if (!hoverDay || !isSameDay(date, hoverDay)) {
                setHoverDay(date);
            }
        }
    };

    // helpers
    const inHoverRange = (day) => (startDate
        && !endDate
        && hoverDay
        && isAfter(hoverDay, startDate)
        && isWithinRange(day, startDate, hoverDay));

    const helpers = {
        inHoverRange,
    };

    const handlers = {
        onDayClick,
        onDayHover,
        onMonthNavigate,
    };

    return open ? (
        <Menu
            dateRange={dateRange}
            minDate={minDateValid}
            maxDate={maxDateValid}
            ranges={definedRanges}
            firstMonth={firstMonth}
            secondMonth={secondMonth}
            setFirstMonth={setFirstMonthValidated}
            setSecondMonth={setSecondMonthValidated}
            setDateRange={setDateRangeValidated}
            helpers={helpers}
            handlers={handlers}
        />
    ) : null;
};

export default DateRangePicker;
