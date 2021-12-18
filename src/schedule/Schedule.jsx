import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import scheduleJson from '../../src/constants/assets/schedule.json';
// import moment from 'moment';
// import 'moment-timezone';


const Schedule = (props) => {
  const [date, setDate] = useState('Sat 1/22');
  return (
    <div className="schedule">
      <h2>
        {props.title}
      </h2>
      <p>Note times are in PST.</p>
      <div className="panel">
        <div className="dates">
          {Object.keys(scheduleJson)
            .map((d, i) =>
              <a
                key={i}
                onClick={() => setDate(d)}>
                <div className={d == date ?
                  'date active' : 'date'}>
                  <h3 className="desktop">{d}</h3>
                  <h3 className="mobile">{d.substring(4)}</h3>
                </div>
              </a>)}
        </div>
        <div className="events">
          {scheduleJson[date]
            .map((e) =>
              <div className="event" key={e.title}>
                <strong><p>{e.Workshop}</p></strong>
                <div className="details flex-row">
                  <div className="flex-col">
                    <strong>START</strong>
                    {e.Start}
                  </div>
                  <div className="flex-col">
                    <strong>END</strong>
                    {e.End}
                  </div>
                  <div className="flex-col">
                    <strong>PRESENTER</strong>
                    {e.Speaker}
                  </div>
                </div>
              </div>)}
        </div>
      </div>
    </div >
  );
};

Schedule.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Schedule;
