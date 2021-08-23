import React from 'react';
import PropTypes from 'prop-types';
import Member from './Member';

const Team = (props) =>
    props.teamMembers.length > 0 &&
    <div className="team">
        <h2>{props.title}</h2>
        <div className="members">
            {props.teamMembers
                .sort((a, b) => a.name > b.name)
                .filter((m) => m.role.includes('Director')).map((m) =>
                    <Member
                        key={m.name}
                        name={m.name}
                        role={m.role}
                        img={m.img ? m.img : 'NA'} />)}
        </div>
        <div className="members">
            {props.teamMembers
                .sort((a, b) => a.name > b.name)
                .filter((m) => m.role.includes('Officer')).map((m) =>
                    <Member
                        key={m.name}
                        name={m.name}
                        role={m.role}
                        img={m.img ? m.img : 'NA'} />)}
        </div>
    </div>;

Team.propTypes = {
    title: PropTypes.string.isRequired,
    teamMembers: PropTypes.array.isRequired,
};

export default Team;
