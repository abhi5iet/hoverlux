import { createContext, useEffect, useState } from "react";

const initState = {title : null, message : null, status : null};

const NotificationContext = createContext({
    notification : null,
    showNotification : function(notifData) {},
    hideNotification : function() {},
});

export const NotificationContextProvider = ({children}) => {
    const [activeNotif, setActiveNotif] = useState(initState);

    useEffect(() => {
        if(activeNotif.status && (activeNotif.status === 'success' || activeNotif.status === 'error')){
            const timer = setTimeout(() => {
                hideNotif();
            }, 3000);
            return () => {
                clearTimeout(timer);
            }
        }
    }, [activeNotif.status])

    const showNotif = (notifData) => {
        setActiveNotif(notifData);
    }

    const hideNotif = () => {
        setActiveNotif(initState);
    }
    const context = {
        notification : activeNotif,
        showNotification : showNotif,
        hideNotification : hideNotif
    }

    return (
        <NotificationContext.Provider value={context} >
            {children}
        </NotificationContext.Provider>
    )
};

export default NotificationContext;