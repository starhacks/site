import React from 'react';
import PropTypes from 'prop-types'
import '../App.scss'
import Carousel from 'react-elastic-carousel';
import { hackathonSchedule } from '../constants';

const Schedule = props =>
    <div className="schedule">
        <h2>
            {props.title}
        </h2>
        <Carousel>
            {
                hackathonSchedule
                    .map(item =>
                        <>
                            <div className="schedule-panel">
                                <h2 key={item.id}>{item.title}</h2>
                                <div className="desktop-schedule">
                                    <div className="time">
                                        <h3>Time</h3>
                                        {item.events.map(evt => <p>{evt.time}</p>)}
                                    </div>
                                    <div className="event">
                                        <h3>Event</h3>
                                        {item.events.map(evt => <p>{evt.title}</p>)}
                                    </div>
                                </div>
                                <div className="mobile-schedule">
                                    {item.events.map(evt => <div className="time-event">
                                        <p>{evt.time}</p>
                                        <p>{evt.title}</p>
                                    </div>)}
                                </div>
                            </div>

                        </>)
            }
        </Carousel>
    </div>

Schedule.propTypes = {
    title: PropTypes.string.isRequired
}

export default Schedule;