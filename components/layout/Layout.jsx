import React, { Fragment, useContext } from 'react'
import NotificationContext from '../../store/notificationContext';
import Notification from '../UI/notification';
import MainHeader from './MainHeader';

const Layout = ({ children }) => {
    const notifCtx = useContext(NotificationContext);
    const { notification } = notifCtx;
    const {title, message, status} = notification;
    return (
        <Fragment>
            <MainHeader />
            <main>
                {children}
            </main>
            {notification && <Notification title={title} message={message} status={status} />}
        </Fragment>
    )
}

export default Layout;

