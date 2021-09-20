import React from 'react';
import { setMonth, getMonth, setYear, getYear } from 'date-fns';
import { Grid, makeStyles, IconButton, Select, MenuItem } from '@material-ui/core';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles(() => ({
    iconContainer: {
        padding: 5,
    },
    icon: {
        padding: 10,
        '&:hover': {
            background: 'none',
        },
    },
}));

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
];

const generateYears = (relativeTo, count) => {
    const half = Math.floor(count / 2);
    return Array(count)
        .fill(0)
        .map((_y, i) => relativeTo.getFullYear() - half + i);
};

const Header = ({ date, setDate, nextDisabled, prevDisabled, onClickNext, onClickPrevious }) => {
    const classes = useStyles();

    const handleMonthChange = (event) => {
        setDate(setMonth(date, parseInt(event.target.value)));
    };

    const handleYearChange = (event) => {
        setDate(setYear(date, parseInt(event.target.value)));
    };

    return (
        <Grid container justify="space-between" alignItems="center">
            <Grid item className={classes.iconContainer}>
                <IconButton
                    className={classes.icon}
                    disabled={prevDisabled}
                    onClick={onClickPrevious}
                >
                    <ChevronLeft color={prevDisabled ? 'disabled' : 'action'} />
                </IconButton>
            </Grid>
            <Grid item>
                <Select
                    value={getMonth(date)}
                    onChange={handleMonthChange}
                    MenuProps={{ disablePortal: true }}
                >
                    {MONTHS.map((month, idx) => (
                        <MenuItem key={month} value={idx}>
                            {month}
                        </MenuItem>
                    ))}
                </Select>
            </Grid>

            <Grid item>
                <Select
                    value={getYear(date)}
                    onChange={handleYearChange}
                    MenuProps={{ disablePortal: true }}
                >
                    {generateYears(date, 30).map((year) => (
                        <MenuItem key={year} value={year}>
                            {year}
                        </MenuItem>
                    ))}
                </Select>
            </Grid>
            <Grid item className={classes.iconContainer}>
                <IconButton className={classes.icon} disabled={nextDisabled} onClick={onClickNext}>
                    <ChevronRight color={nextDisabled ? 'disabled' : 'action'} />
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default Header;
