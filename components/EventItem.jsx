import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import evItemStyles from '../styles/EventItem.module.css';

const EventItem = ({title, image, date, location, id}) => {

    const actualDate = new Date(date).toLocaleString('en-US', {
        day : 'numeric',
        month : 'long',
        year : 'numeric'
    })

    const formattedAddress = location.replace(", " , "/n")

    return (
        <li className={evItemStyles.item}>
            <Image layout="fill" src={`/${image}`} alt={title} />
            <div>
                <div>
                    <h2>{title}</h2>
                    <div>
                        <time>{actualDate}</time>
                    </div>
                    <div>
                        <address>ADDRESS</address>
                    </div>
                </div>
                <div>
                    <Link href={`/events/${id}`}>EXPLORE EVENT</Link>
                </div>
            </div>
        </li>
    )
}

export default EventItem
