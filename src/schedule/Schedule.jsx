import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';


const Schedule = (props) => {
    const [date, setDate] = useState(0);

    return (
        <div className="schedule">
            <h2>
                {props.title}
            </h2>
            <div className="panel">
                <div className="dates">
                    {props.schedule
                        .map((e) =>
                            <a
                                key={e.id}
                                onClick={() => setDate(e.id)}>
                                <div className={e.id == date ?
                                    'date active' : 'date'}>
                                    <h3 className="desktop">
                                        {e.dow} {e.date}
                                    </h3>
                                    <h3 className="mobile">{e.date}</h3>
                                </div>
                            </a>)}
                </div>
                <div className="events">
                    {props.schedule[date].events
                        .map((e) => <div className="event" key={e.title}>
                            <strong><p>{e.title}</p></strong>
                            <div className="details">
                                <div className="start">
                                    <strong>START</strong>
                                    {e.start}
                                </div>
                                <div className="end">
                                    <strong>END</strong>
                                    {e.end}
                                </div>
                                <div className="presenter">
                                    <strong>PRESENTER</strong>
                                    {e.presenter ? e.presenter : 'TBA'}
                                </div>
                            </div>
                        </div>)}
                </div>
            </div>
        </div>
    );
};

Schedule.propTypes = {
    title: PropTypes.string.isRequired,
    schedule: PropTypes.array.isRequired,
};

export default Schedule;
