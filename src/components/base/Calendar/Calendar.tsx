import React, { FunctionComponent } from 'react';

import "@/styles/components/base/Calendar/Index.scss";

import Day from './Day';

const weekdays = ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT'];
const weekdaysList = weekdays.map(weekday => (
    <div className="weekday" key={weekday}>{ weekday }</div>
));

const getEventHash = events => {
    const hash = {};
    for (const event of events) {
        if (!hash[event.props.date.toDateString()]) {
            hash[event.props.date.toDateString()] = [];
        }
        hash[event.props.date.toDateString()].push(event);
    }
    return hash;
};

const getDaysArray = month => {
    const startDate = new Date(`2022-${month}-01`);
    const weekdayIndex = startDate.getDay();
    startDate.setDate(startDate.getDate() - weekdayIndex);
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 42);
    const daysArray = [] as Date[];
    while (startDate < endDate) {
        daysArray.push(new Date(startDate));
        startDate.setDate(startDate.getDate() + 1);
    }
    return daysArray;
};

interface CalendarProps {
    children: [JSX.Element];
    month: number;
    onDayClick?: (Date) => void;
}

const Calendar: FunctionComponent<CalendarProps> = ({ children, month, onDayClick }) => {
    const daysArray = getDaysArray(month);
    const eventHash = getEventHash(children);

    const dayList = daysArray.map((day, i) => {
        const events = eventHash[day.toDateString()];

        return <Day key={i} date={day} onDayClick={onDayClick}>
            { events }
        </Day>;
    });


    return <div className='calendar'>
        <div className="calendar__body">
            <div className="weekdays d-flex">
                { weekdaysList }
            </div>
            <div className="days d-flex flex-wrap">
                { dayList }
            </div>
        </div>
    </div>;
};

export default Calendar;
