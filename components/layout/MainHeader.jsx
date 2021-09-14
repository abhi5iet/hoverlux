import React from 'react';
import Link from 'next/link';
import headStyles from '../../styles/MainHeader.module.css';

const MainHeader = () => {
    return (
        <header className={headStyles.header}>
            <div className={headStyles.logo}>
                <Link href="/" >NextEvents</Link>
            </div>
            <nav className={headStyles.navigation}>
                <ul>
                    <li>
                        <Link href="/events"> Browse All Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader
