import Image from 'next/image';
import evItemStyles from '../../styles/EventItem.module.css';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import DateIcon from '../icons/date-icon';
import Button from '../UI/Button';

const EventItem = ({title, image, date, location, id}) => {

    const actualDate = new Date(date).toLocaleString('en-US', {
        day : 'numeric',
        month : 'long',
        year : 'numeric'
    })

    const formattedAddress = location.replace(', ' , '\n')

    return (
        <li className={evItemStyles.item}>
            <Image width="500" height="500" src={`/${image}`} alt={title} />
            <div className={evItemStyles.content}>
                <div className={evItemStyles.summary}>
                    <h2>{title}</h2>
                    <div className={evItemStyles.date}>
                        <DateIcon/>
                        <time>{actualDate}</time>
                    </div>
                    <div className={evItemStyles.address}>
                        <AddressIcon/>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={evItemStyles.actions}>
                    <Button link={`/events/${id}`}>
                        <span>EXPLORE EVENT</span>
                        <span className={evItemStyles.icon}><ArrowRightIcon/></span>
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem
