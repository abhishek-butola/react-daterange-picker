import { addDays, startOfWeek, endOfWeek, addWeeks, startOfMonth, endOfMonth, addMonths } from 'date-fns';

const getDefaultRanges = (date) => [
    {
        label: 'Today',
        startDate: date,
        endDate: date,
    },
    {
        label: 'Yesterday',
        startDate: addDays(date, -1),
        endDate: addDays(date, -1),
    },
    {
        label: 'This Week',
        startDate: startOfWeek(date, { weekStartsOn: 1 }),
        endDate: endOfWeek(date, { weekStartsOn: 1 }),
    },
    {
        label: 'Last Week',
        startDate: startOfWeek(addWeeks(date, -1), { weekStartsOn: 1 }),
        endDate: endOfWeek(addWeeks(date, -1), { weekStartsOn: 1 }),
    },
    {
        label: 'Last 14 Days',
        startDate: addDays(date, -13),
        endDate: date,
    },
    {
        label: 'This Month',
        startDate: startOfMonth(date),
        endDate: endOfMonth(date),
    },
    {
        label: 'Last Month',
        startDate: startOfMonth(addMonths(date, -1)),
        endDate: endOfMonth(addMonths(date, -1)),
    },
];

export const defaultRanges = getDefaultRanges(new Date());
