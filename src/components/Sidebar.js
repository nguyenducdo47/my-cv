import React from 'react';
import Profile from './Profile';
import Skills from './Skills';
import Tools from './Tools';
import English from './English';
import Certificate from './Certificate';


const Sidebar = () => (
    <div className="p-4 rounded sidebar bg-light1 text-capitalize">
        <Profile />
        <Skills />
        <Tools />
        <English />
        <Certificate />

    </div>
);

export default Sidebar;
