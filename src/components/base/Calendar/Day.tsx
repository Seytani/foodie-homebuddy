import React, { FunctionComponent } from 'react';

import '@/styles/components/base/Calendar/Day.scss';

interface DayProps {
    date: Date;
    events: [JSX.Element];
}

const Day: FunctionComponent<DayProps> = ({ date, events }) => {
    const handleClick = () => {
        alert(date.getDate());
    };

    return <div className="day" onClick={ handleClick }>
        <span className="label">
            { date.getDate() }
        </span>
        <div>
            <div>
                { events }
            </div>
        </div>
    </div>;
};

export default Day;
