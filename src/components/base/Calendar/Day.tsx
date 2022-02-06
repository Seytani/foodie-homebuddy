import React, { FunctionComponent } from 'react';

import '@/styles/components/base/Calendar/Day.scss';

interface DayProps {
    date: Date;
    children?: [JSX.Element];
    onDayClick?: (Date) => void;
}

const Day: FunctionComponent<DayProps> = ({ date, children, onDayClick }) => {
    const handleClick = () => {
        onDayClick(date);
    };

    return <div className="day" onClick={ handleClick }>
        <span className="label">
            { date.getDate() }
        </span>
        <div>
            <div>
                { children }
            </div>
        </div>
    </div>;
};

export default Day;
