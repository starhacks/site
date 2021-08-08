import React from 'react';
import PropTypes from 'prop-types';
import { teamMembers } from '../constants';
import Member from './Member';

const Team = (props) =>
    <>
        <h2>{props.title}</h2>
        <div className="team">
            {teamMembers.filter((m) => m.role.includes('Director')).map((m) =>
                <Member
                    key={m.name}
                    name={m.name}
                    role={m.role}
                    img={m.img} />)}
        </div>
        <div className="team">
            {teamMembers.filter((m) => m.role.includes('Officier')).map((m) =>
                <Member
                    key={m.name}
                    name={m.name}
                    role={m.role}
                    img={m.img} />)}
        </div>
    </>;

Team.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Team;
