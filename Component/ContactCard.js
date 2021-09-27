import React from 'react';

function ContactCard(props) {
    return (
        <div className="contact-card">
            <img src={props.imgUrl} />
            <h3>{props.name}</h3>
            <p>Phone:{props.Phone}</p>
            <p>Email: {props.Email}</p>
        </div>
    )
}
export default ContactCard