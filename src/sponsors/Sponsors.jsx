import React from 'react';
import PropTypes from 'prop-types';

const Sponsors = (props) =>
    <div className="sponsors">
        <h2>
            {props.title}
        </h2>
        <div className="sponsors-list flex-row-col">
            {props.sponsors.map((s) =>
                <div key={s.title} className="flex-col sponsor">
                    <a href={s.link} target="_blank" rel="noreferrer">
                        <img key={s.title} src={s.logo} />
                    </a>

                </div>)}
        </div>
        <div className="panel-fit">
            <p>
                Interested in sponsoring StarHacks II? Reach out to us at {' '}
                <a href="mailto:sponsor@starhacks.tech">
                    sponsor@starhacks.tech
                </a>
                !
            </p>
        </div>
    </div>;

Sponsors.propTypes = {
    title: PropTypes.string.isRequired,
    sponsors: PropTypes.array.isRequired,
};

export default Sponsors;
