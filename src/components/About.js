import React, { useContext, useEffect } from 'react';
import noteContext from '../context/notes/noteContext';

const About = () => {
    // const a = useContext(noteContext);
    // useEffect(() => {
    //     a.update();
    // }, []);
    
    return (
        <div>
            {/* This is about {a.state.name} and {a.state.class} */}
            this is about page
        </div>
    );
};

export default About;
