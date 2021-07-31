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
                                <div>
                                    {item.events.map(event => <p>{event.time} {event.title}</p>)}
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