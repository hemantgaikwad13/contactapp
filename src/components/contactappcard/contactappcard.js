import './contactappcard.css';
import React from 'react';
import imageedit from './edit button.png';
import imagedel from './delete btn.png';
export default function ContactAppCard({ name, mobile, email, deleteContact, enableEditMode, index }) {

    return (
        <div className='contactcard'>
            <p className='contact-name'>👨 {name}</p>
            <p className='contact-name'>📞 {mobile}</p>
            <p className='contact-name'>✉ {email}</p>

            <span onClick={() => {
                deleteContact(mobile)
            }}><img src={imagedel} className='deletebutton' /></span>

            <span onClick={() => {
                enableEditMode(index);
            }}><img src={imageedit} className='editbtn' /></span>
        </div>
    )
}