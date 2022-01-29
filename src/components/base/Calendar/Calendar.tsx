import React, { FunctionComponent } from 'react';

import Day from './Day';

const weekdays = ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT'];
const weekdaysList = weekdays.map(weekday => (
    <div className="weekday" key={weekday}>{ weekday }</div>
));

const days = (events) => {
    const startDate = new Date('2022-01-01');
    const weekdayIndex = startDate.getDay();
    startDate.setDate(startDate.getDate() - weekdayIndex);
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 42);
    const daysArray = [];

    while (startDate < endDate) {
        const event = events.find(e => (
            e.props.date.toDateString() === startDate.toDateString()
        ));
        daysArray.push(<Day date={new Date(startDate)} event={event} />);
        startDate.setDate(startDate.getDate() + 1);
    }
    return daysArray;
};

interface CalendarProps {
    children: [JSX.Element];
}

const Calendar: FunctionComponent<CalendarProps> = ({ children }) => {
    return <div className='calendar'>
        <div className="calendar__body">
            <div className="weekdays d-flex">
                { weekdaysList }
            </div>
            <div className="days d-flex flex-wrap">
                { days(children) }
            </div>
        </div>
    </div>;
};

export default Calendar;
