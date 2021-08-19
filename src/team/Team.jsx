import React from 'react';
import PropTypes from 'prop-types';
import { teamMembers } from '../constants';
import Member from './Member';

const sortedMembers = teamMembers.sort((a, b) => a.name > b.name);

const Team = (props) =>
    <>
        <h2>{props.title}</h2>
        <div className="team">
            {sortedMembers.filter((m) => m.role.includes('Director')).map((m) =>
                <Member
                    key={m.name}
                    name={m.name}
                    role={m.role}
                    img={m.img ? m.img : 'NA'} />)}
        </div>
        <div className="team">
            {sortedMembers.filter((m) => m.role.includes('Officier')).map((m) =>
                <Member
                    key={m.name}
                    name={m.name}
                    role={m.role}
                    img={m.img ? m.img : 'NA'} />)}
        </div>
    </>;

Team.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Team;
