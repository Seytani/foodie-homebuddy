import React, { FunctionComponent } from 'react';

interface DayProps {
    date: Date;
    event: JSX.Element;
}

const Day: FunctionComponent<DayProps> = ({ date, event }) => {
    const handleClick = () => {
        alert(date.getDate());
    };

    return <div className="day" onClick={ handleClick }>
        { date.getDate() }
        <div>
            <div>
                { event }
            </div>
        </div>
    </div>;
};

export default Day;
