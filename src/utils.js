import {
    startOfWeek, startOfMonth, endOfWeek, endOfMonth, isBefore, addDays, isSameDay,
    isWithinRange, isSameMonth, addMonths, parse, isValid, min, max
} from 'date-fns';

export const identity = (x) => x;

export const chunks = (array, size) => (
    Array.from(
        { length: Math.ceil(array.length / size) },
        (_v, i) => array.slice(i * size, i * size + size),
    )
);

export const combine = (...args) => args.filter(identity).join(' ');

export const getDaysInMonth = (date) => {
    const startWeek = startOfWeek(startOfMonth(date), { weekStartsOn: 1 });
    const endWeek = endOfWeek(endOfMonth(date), { weekStartsOn: 1 });
    const days = [];
    for (let curr = startWeek; isBefore(curr, endWeek);) {
        days.push(curr);
        curr = addDays(curr, 1);
    }
    return days;
};

export const isStartOfRange = ({ startDate }, day) => (
    (startDate && isSameDay(day, startDate))
);

export const isEndOfRange = ({ endDate }, day) => (
    (endDate && isSameDay(day, endDate))
);

export const inDateRange = ({ startDate, endDate }, day) => (
    startDate
    && endDate
    && (isWithinRange(day, startDate, endDate)
        || isSameDay(day, startDate)
        || isSameDay(day, endDate))
);

export const isRangeSameDay = ({ startDate, endDate }) => {
    if (startDate && endDate) {
        return isSameDay(startDate, endDate);
    }
    return false;
};

export const parseOptionalDate = (date, defaultValue) => {
    if (date) {
        const parsed = parse(date);
        if (isValid(parsed)) return parsed;
    }
    return defaultValue;
};

export const getValidatedMonths = (range, minDate, maxDate) => {
    const { startDate, endDate } = range;
    if (startDate && endDate) {
        const newStart = max(startDate, minDate);
        const newEnd = min(endDate, maxDate);

        return [newStart, isSameMonth(newStart, newEnd) ? addMonths(newStart, 1) : newEnd];
    }
    return [startDate, endDate];
};
