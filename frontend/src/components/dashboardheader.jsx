import React from 'react';
import '../css/Dashboard.css';
import Header from './Header.js';
import NotificationIcon from '../../src/assets/icons/notification.svg';
import SettingsIcon from '../../src/assets/icons/settings.svg';

function DashboardHeader ({ btnText, onClick }) {
    return(
        <>
        <Header />
    </>
    )
}

export default DashboardHeader;