import React from 'react'
import "./popup.css"
import Appointment from '../myclinic/Appointment.js'

export default function PopupAppointment(props) {
    return (
        (props.trigger) ? (
            <div className='popup'>
                <div className='popup-inner'>
                    <button className='close-btn btn btn-danger' onClick={() => props.setTrigger(false)}>Close</button>
                    { props.children }
                    <Appointment></Appointment>
                </div>
            </div>
        ) : ""
    );
}