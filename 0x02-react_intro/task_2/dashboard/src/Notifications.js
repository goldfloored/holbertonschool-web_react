import React from 'react';
import './Notifications.css';
import closeIcon from './closeIcon.png';
import { getLatestNotification } from './utils';


const btn = {
    position: 'absolute',
    top: '15px',
    right: '10px',
    backgroundColor: 'white',
    border: 'none'
}

const closeIconStyle = {
    height: '20px',
    width: 'auto'
}

const list = {

}

const onClickBtn = () => {
    console.log('Close button has been clicked');
};

export default function Notifications() {
    return (
        <div className="Notifications">
            
            <p>Here is the list of notifications</p>
            <button style={btn} aria-label="Close" onClick={onClickBtn}>
                <img src={closeIcon} style={closeIconStyle} alt="close icon"></img>
            </button>

            <ul style={list}>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification() }} />
            </ul>

        </div>
    );
}
