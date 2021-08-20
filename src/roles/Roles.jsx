import React from 'react';
import Panel from './Panel';
import PropTypes from 'prop-types';

const Roles = (props) =>
    <div className="get-involved">
        <h2>
            {props.title}
        </h2>
        <div className="roles">
            {props.roles.map((r) =>
                <Panel
                    key={r.role}
                    title={r.role}
                    blurb={r.desc}
                    button={r.link}
                />,
            )}
        </div>
    </div>;

Roles.propTypes = {
    title: PropTypes.string.isRequired,
    roles: PropTypes.isRequired,
};

export default Roles;
