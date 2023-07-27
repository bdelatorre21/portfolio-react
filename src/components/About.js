import React from 'react';

const About = ({ name, profilePictureSrc, bio, projects }) => {

    return (
        <div className="about-section">
            <br/>
            <img src={profilePictureSrc} alt={name} className="profile-picture" />
            <h1 className='name'>{name}</h1>
            <p>{bio}</p>
        </div>
    );
};

export default About;
